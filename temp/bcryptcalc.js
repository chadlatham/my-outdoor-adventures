'use strict';

const bcrypt = require('bcrypt-as-promised');

bcrypt.hash('deleted@gmail.com', 12)
  .then((hashed) => {
    console.log(hashed); // eslint-disable-line no-console
  });
