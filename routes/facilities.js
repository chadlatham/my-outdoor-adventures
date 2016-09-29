'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
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

  axios.get(`${url}${apiKeyRIDB}${params}`)
    .then((facilitiesRes) => {
      // Camelize but leave upper case keys alone
      const facilities = camelizeKeys(facilitiesRes.data, (key, convert) => {
        return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
      });

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

  axios.get(`${url}${facilityID}?${apiKeyRIDB}${full}`)
    .then((facilityRes) => {
      // Camelize but leave upper case keys alone
      const facility = camelizeKeys(facilityRes.data, (key, convert) => {
        return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
      });

      res.send(facility);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
