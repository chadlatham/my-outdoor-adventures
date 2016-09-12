'use strict';

const axios = require('axios');

// axios.get('http://ipinfo.io/8.8.8.8')
axios.get('http://ipinfo.io')
  .then((results) => {
    console.log(results.data);
  })
  .catch((err) => {
    console.log(err);
  });
