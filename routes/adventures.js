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
    facilityName,
    imgPublicId,
    recommend,
    reviewText,
    ridbFacilityId,
    tripFromDate,
    tripToDate
  } = req.body;
  let user;
  let facility;

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
          .then((facilityExists) => {
            if (facilityExists) {
              return [facilityExists];
            }

            return knex('facilities')
              .insert(decamelizeKeys({ facilityName, ridbFacilityId }), '*')
              .transacting(trx);
          })
          .then((facilities) => {
            facility = camelizeKeys(facilities[0]);
            const adventure = {
              userId,
              facilityId: facility.id,
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

      delete newAdv.deletedAt;
      delete newAdv.userId;
      delete newAdv.facilityId;
      newAdv.ridbFacilityId = ridbFacilityId;
      newAdv.facilityName = facility.facilityName;
      newAdv.userName = user.userName;

      res.send(newAdv);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/adventures/:userName', (req, res, next) => {
  const { userName } = req.params;
  let user;
  let adventures;

  knex('users')
    .whereNull('deleted_at')
    .andWhere('user_name', userName)
    .first()
    .then((userExists) => {
      if (!userExists) {
        throw boom.notFound('Invalid user name!');
      }

      user = camelizeKeys(userExists);
      const selectFields = [
        'adventures.created_at',
        'adventures.id',
        'adventures.img_public_id',
        'adventures.recommend',
        'adventures.review_text',
        'facilities.ridb_facility_id',
        'facilities.facility_name',
        'adventures.trip_from_date',
        'adventures.trip_to_date',
        'adventures.updated_at',
        'users.user_name'
      ];

      return knex('adventures')
        .whereNull('adventures.deleted_at')
        .andWhere('user_id', user.id)
        .join('users', 'adventures.user_id', 'users.id')
        .join('facilities', 'adventures.facility_id', 'facilities.id')
        .select(selectFields)
        .orderBy('adventures.trip_to_date', 'desc');
    })
    .then((adventuresExists) => {
      if (!adventuresExists) {
        throw boom.notFound('No adventures for this user!');
      }

      adventures = camelizeKeys(adventuresExists);

      res.send(adventures);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
