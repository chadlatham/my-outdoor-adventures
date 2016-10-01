'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const router = express.Router(); // eslint-disable-line new-cap
const val = require('../validations/adventures');
const { checkAuth } = require('../modules/middleware');

// Return fields
// facilityId, id, imgPublicId, recommend, reviewText,
// tripFromDate, tripToDate, userName
router.post('/adventures', checkAuth, ev(val.post), (req, res, next) => {
  const userId = req.token.userId;
  const {
    ridbFacilityId,
    imgPublicId,
    recommend,
    reviewText,
    tripFromDate,
    tripToDate
  } = req.body;
  let user;

  knex('users')
    .where('id', userId)
    .first()
    .then((userExists) => {
      if (!userExists) {
        throw boom.unauthorized('Invalid User ID');
      }

      user = camelizeKeys(userExists);

      return;
    })
    .then(() => {
      return knex.transaction((trx) => {
        knex('facilities')
          .where('ridb_facility_id', ridbFacilityId)
          .first()
          .then((facility) => {
            if (facility) {
              return [facility];
            }

            return knex('facilities')
              .insert(decamelizeKeys({ ridbFacilityId }), '*')
              .transacting(trx);
          })
          .then((facilities) => {
            const dbFacility = camelizeKeys(facilities[0]);
            const adventure = {
              userId,
              facilityId: dbFacility.id,
              tripFromDate,
              tripToDate,
              reviewText,
              recommend,
              imgPublicId
            };

            return knex('adventures').insert(decamelizeKeys(adventure), '*')
              .transacting(trx);
          })
          .then(trx.commit)
          .catch(trx.rollback);
      });
    })
    .then((newAdventures) => {
      const newAdv = camelizeKeys(newAdventures[0]);

      delete newAdv.createdAt;
      delete newAdv.updatedAt;
      delete newAdv.deletedAt;
      delete newAdv.userId;
      newAdv.userName = user.userName;

      res.send(newAdv);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
