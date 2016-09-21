'use strict';

const { camelizeKeys } = require('humps');
const boom = require('boom');
const ev = require('express-validation');
const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const val = require('../validations/geocode');
const axios = require('axios');
const apiKey = `&key=${process.env.GOOGLE_GEOCODE_APIKEY}`;
const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?components=';

// Get the geolocation of a city/state
router.get('/geocode', ev(val.get), (req, res, next) => {
  const { city, state } = req.query;
  const queryCity = city ? `locality:${city.replace(/ /g, '+')}` : '';
  let queryState = '';

  if (state) {
    queryState = `administrative_area:${state.replace(/ /g, '+')}`;
  }

  const queryJoin = city && state ? '|' : '';
  const query = `${queryCity}${queryJoin}${queryState}|country:US`;

  axios.get(`${baseUrl}${query}${apiKey}`)
    .then((response) => {
      if (!response.data.results.length) {
        throw boom.notFound('Location could not be found!');
      }

      res.send(camelizeKeys(response.data.results[0]));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
