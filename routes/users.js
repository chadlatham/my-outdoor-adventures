'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const router = express.Router(); // eslint-disable-line new-cap
const val = require('../validations/users');
const { checkAuth } = require('../modules/middleware');
const crypto = require('crypto');
const secret = process.env.JWT_SECRET;

// Get user settings
router.get('/users', checkAuth, (req, res, next) => {
  const userId = req.token.userId;

  knex('users')
    .select('email', 'user_name', 'first_name', 'last_name', 'id')
    .where('id', userId)
    .first()
    .then((dbUser) => {
      if (!dbUser) {
        throw boom.notFound('Invalid user id');
      }

      res.send(camelizeKeys(dbUser));
    })
    .catch((err) => {
      next(err);
    });
});

// Create a user account
router.post('/users', ev(val.post), (req, res, next) => {
  const { firstName, lastName, userName, password, email } = req.body;

  knex('users')
    .where('user_name', userName)
    .orWhere('email', email)
    .first()
    .then((dbUser) => {
      const user = camelizeKeys(dbUser);

      if (user) {
        if (user.userName === userName) {
          throw boom.conflict('User name already exists');
        }

        if (user.email === email) {
          throw boom.conflict('Email already exists');
        }
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const hashedEmail = crypto.createHmac('sha256', secret)
        .update(email)
        .digest('hex');

      return knex('users')
        .returning(['email', 'user_name', 'first_name', 'last_name', 'id'])
        .insert(decamelizeKeys({
          firstName,
          lastName,
          userName,
          hashedPassword,
          hashedEmail,
          email,
          emailVerifiedAt: new Date() // Insert until verification implemented
        }));
    })
    .then((newUsers) => {
      const newUser = camelizeKeys(newUsers[0]);

      delete newUser.hashedPassword;
      res.send(newUser);
    })
    .catch((err) => {
      next(err);
    });
});

// Delete a user account
router.delete('/users', checkAuth, (req, res, next) => {
  const userId = req.token.userId;

  knex('users')
    .where('user_id', userId)
    .first()
    .then((dbUser) => {
      if (!dbUser) {
        throw boom.notFound('Invalid user id');
      }

      const dat = new Date();

      return knex('users')
        .where('id', userId)
        .update(decamelizeKeys({ deletedAt: dat, updatedAt: dat }), '*');
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

// Update user settings ----- Need to implement!
router.patch('/users', checkAuth, (req, res, next) => {
  const { firstName, lastName, userName, password, email } = req.body;
  const userId = req.token.userId;
  let user;
  const userToInsert = {};
  const dat = new Date();

  knex('users')
    .where('id', userId)
    .first()
    .then((dbUser) => {
      if (!dbUser) {
        throw boom.notFound('Invalid user id');
      }

      user = camelizeKeys(dbUser);

      if (firstName) {
        userToInsert.firstName = firstName;
      }

      if (lastName) {
        userToInsert.lastName = lastName;
      }

      if (userName && user.userName !== userName) {
        return knex('users')
          .where('user_name', userName)
          .first();
      }

      return;
    })
    .then((existingUN) => {
      if (existingUN) {
        throw boom.conflict('User name already exists');
      }

      if (userName) {
        userToInsert.userName = userName;
      }

      if (email && user.email !== email) {
        return knex('users')
          .where('email', email)
          .first();
      }

      return;
    })
    .then((existingEmail) => {
      if (existingEmail) {
        throw boom.conflict('Email address already exists');
      }

      if (email) {
        userToInsert.email = email;
        userToInsert.hashedEmail = crypto.createHmac('sha256', secret)
          .update(email)
          .digest('hex');
        userToInsert.emailVerifiedAt = dat; // Until email verif. implemented.
      }

      if (password) {
        return bcrypt.hash(password, 12);
      }

      return;
    })
    .then((hashedPassword) => {
      if (hashedPassword) {
        userToInsert.hashedPassword = hashedPassword;
      }

      userToInsert.updatedAt = dat;

      return knex('users')
        .where('id', userId)
        .returning(['email', 'user_name', 'first_name', 'last_name', 'id'])
        .update(decamelizeKeys(userToInsert));
    })
    .then((updatedUsers) => {
      res.send(camelizeKeys(updatedUsers[0]));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
