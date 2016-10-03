'use strict';

const { camelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const router = express.Router(); // eslint-disable-line new-cap
const val = require('../validations/facilities');
const axios = require('axios');
const apiKeyRIDB = `apikey=${process.env.RIDB_APIKEY}`;

// humps.camelizeKeys(obj, function (key, convert) {
//   return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
// });
// humps.decamelizeKeys(obj, function (key, convert, options) {
//   return /^[A-Z0-9_]+$/.test(key) ? key : convert(key, options);
// });

// Get facilities (camp search)
// { latitude, longitude, radius, query, limit, offset }

// eslint-disable-next-line
router.get('/facilities', ev(val.get), (req, res, next) => {
  let { latitude, longitude, radius, query, limit, offset } = req.query;
  const url = 'https://ridb.recreation.gov/api/v1/facilities?';

  // 9=camping, 30=FIRE LOOKOUTS/CABINS OVERNIGHT, 109=HORSE CAMPING
  const activities = '&activity=9,109';
  const full = '&full';

  // Preparing to convert to query string
  latitude = latitude ? `&latitude=${latitude}` : '';
  longitude = longitude ? `&longitude=${longitude}` : '';
  radius = radius ? `&radius=${radius}` : '';
  query = query ? `&query=${query}` : '';
  limit = limit ? `&limit=${limit}` : '';
  offset = (offset || offset === 0) ? `&offset=${offset}` : '';
  const params1 = `${activities}${latitude}${longitude}`;
  const params2 = `${radius}${query}${limit}${offset}${full}`;
  const params = `${params1}${params2}`;

  let facilities;
  let ids;
  const results = {};

  axios.get(`${url}${apiKeyRIDB}${params}`)
    .then((facilitiesRes) => {
      // Camelize but leave upper case keys alone
      facilities = camelizeKeys(facilitiesRes.data, (key, convert) => {
        return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
      });

      // Extract the RIDB id's
      const ridbIds = facilities.RECDATA.map((fac) => fac.facilityID);

      return knex('facilities')
        .whereNull('deleted_at')
        .whereIn('ridb_facility_id', ridbIds)
        .orderBy('id');
    })
    .then((dbFacilities) => {
      ids = camelizeKeys(dbFacilities).map((fac) => {
        results[fac.ridbFacilityId] = {};
        results[fac.ridbFacilityId].id = fac.id;

        return fac.id;
      });

      return knex('adventures')
        .whereNull('deleted_at')
        .whereIn('facility_id', ids)
        .orderBy('facility_id', 'desc')
        .orderBy('trip_to_date', 'desc');
    })
    .then((dbRecentAdvs) => { //eslint-disable-line
      // Calculate the count and most recent trips info
      for (const adv of camelizeKeys(dbRecentAdvs)) {
        for (const key in results) {
          if (adv.facilityId === results[key].id) {
            if (results[key].count) {
              results[key].count += 1;
              if (adv.recommend) { //eslint-disable-line
                results[key].rating += 1;
              }
              else {
                results[key].rating -= 1;
              }
              // eslint-disable-next-line
              if (adv.tripToDate > results[key].tripToDate) {
                results[key].tripToDate = adv.tripToDate;
                results[key].userId = adv.userId;
              }
            }
            else {
              if (adv.recommend) { //eslint-disable-line
                results[key].rating = 1;
              }
              else {
                results[key].rating = -1;
              }
              results[key].count = 1;
              results[key].tripToDate = adv.tripToDate;
              results[key].userId = adv.userId;
            }
            break;
          }
        }
      }

      const userIds = [];

      for (const fac in results) {
        userIds.push(results[fac].userId);
      }

      return knex('users')
        .select('id', 'user_name')
        .whereNull('deleted_at')
        .whereIn('id', userIds);
    })
    .then((users) => {
      // Insert userNames into the results
      for (const fac in results) {
        results[fac].facilityId = results[fac].id;
        delete results[fac].id;
        for (const user of camelizeKeys(users)) {
          if (results[fac].userId === user.id) {
            results[fac].userName = user.userName;
            break;
          }
        }
      }

      // Append the adventure stats to the API response
      for (const fac of facilities.RECDATA) {
        if (results.hasOwnProperty(fac.facilityID)) {
          fac.ADVENTUREDATA = results[fac.facilityID];
        }
      }

      res.send(facilities);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/facilities/:facilityID', ev(val.getID), (req, res, next) => {
  const { facilityID } = req.params;
  const url = 'https://ridb.recreation.gov/api/v1/facilities/';
  const full = '&full';
  let facility;

  axios.get(`${url}${facilityID}?${apiKeyRIDB}${full}`)
    .then((facilityRes) => {
      // Camelize but leave upper case keys alone
      facility = camelizeKeys(facilityRes.data, (key, convert) => {
        return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
      });

      return knex('facilities')
        .where('ridb_facility_id', facility.facilityID)
        .whereNull('deleted_at')
        .first();
    })
    .then((dbFacility) => {
      if (!dbFacility) {
        return;
      }

      const advFields = [
        'created_at',
        'facility_id',
        'img_public_id',
        'recommend',
        'review_text',
        'trip_from_date',
        'trip_to_date',
        'updated_at',
        'user_id'
      ];

      return knex('adventures')
        .select(advFields)
        .where('facility_id', camelizeKeys(dbFacility).id)
        .whereNull('deleted_at')
        .orderBy('trip_to_date', 'desc')
        .then((dbAdventures) => {
          facility.ADVENTURES = camelizeKeys(dbAdventures);

          const userIds = facility.ADVENTURES.map((adv) => adv.userId);

          return knex('users')
            .whereIn('id', userIds)
            .orderBy('id');
        })
        .then((dbUsers) => {
          const users = camelizeKeys(dbUsers);

          for (const adv of facility.ADVENTURES) {
            for (const user of users) {
              if (adv.userId === user.id) {
                adv.userName = user.userName;

                break;
              }
            }
          }
        });
    })
    .then(() => {
      res.send(facility);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
