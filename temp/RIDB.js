/* eslint-disable */
'use strict';

const axios = require('axios');
const { decamelizeKeys } = require('humps');

// Activities search
const url = 'https://ridb.recreation.gov/api/v1/activities?';
// const activities = '5,6,7,9,11,14,15,16,18,20,22,23,25,26,27,28,30,31,34,43,104,105,106,107,108,109';
// const activities = '9,30,109';

// facilities search - radius 1-above integer
// const url = 'https://ridb.recreation.gov/api/v1/facilities?';
const apiKey = 'apikey=28865E612CC64AB3A06BF724737A08DC';
// const params = `&activity=${activities}&latitude=47.1595847&longitude=-122.4984306&radius=200&query=Creek&limit=5&full`;
// const params = `&activity=${activities}&query=Cougar&limit=5&full`;

// full

// facility specifics
// facilities/:id/facilityaddresses - for street addresses
// facilities/:id/media - for pictures
// 201792,232023,232033,203833,234086
// const url = 'https://ridb.recreation.gov/api/v1/facilities/232074/facilityaddresses?'
// const url = 'https://ridb.recreation.gov/api/v1/facilities/232074/media?'
const params = '';

axios.get(url + apiKey + params)
  .then((results) => {
    console.log(results.data)
    // console.log(decamelizeKeys(results.data.RECDATA[0]))
  })
  .catch((err) => {
    console.log(err.response);
  });
