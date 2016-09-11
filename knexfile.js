module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/sample_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/sample_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
