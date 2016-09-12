'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/outdoor_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/outdoor_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
