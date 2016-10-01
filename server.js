'use strict';

const isDeveloping = process.env.NODE_ENV !== 'production';

if (isDeveloping) {
  require('dotenv').config({ silent: true });
}

// Necessary for webpack SPA developer mode
const axios = require('axios');

const express = require('express');
const path = require('path');
const port = isDeveloping ? 3000 : process.env.PORT;

// Webpack Requires
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config/webpack.dev');
const compiler = webpack(config);

// Require Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Require Client Routes
const auth = require('./routes/auth');
const users = require('./routes/users');
const geocode = require('./routes/geocode');
const facilities = require('./routes/facilities');
const adventures = require('./routes/adventures');

// Instantiate Express
const app = express();

// Disable server identifying header
app.disable('x-powered-by');

// Use Middleware
switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use(bodyParser.json());
app.use(cookieParser());

if (isDeveloping) {
  // Serve the transpiled static files from memory
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log // eslint-disable-line
  }));
}
else {
  // Serve the static resources (compiled in dist on deploy)
  app.use(express.static(path.join(__dirname, 'dist')));
}

// CSRF protection (only JSON Accept headers to API routes)
app.use('/api', (req, res, next) => {
  if (/json/.test(req.get('Accept'))) {
    return next();
  }

  res.sendStatus(406);
});

// Use Client Routes
app.use('/api', auth);
app.use('/api', users);
app.use('/api', geocode);
app.use('/api', facilities);
app.use('/api', adventures);

// Page not found handler (for push-state serving of SPA)
if (isDeveloping) {
  app.use((_req, res) => {
    axios.get('http://localhost:3000/index.html')
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        throw err;
      });
  });
}
else {
  app.use((_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Global error handler
// eslint-disable-next-line max-params
app.use((err, _req, res, _next) => {
  if (err.status) {
    // Joi validation errors
    return res
      .status(err.status)
      .set('Content-Type', 'application/json')
      .send(err);
  }

  if (err.output && err.output.statusCode) {
    // Boom errors
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.sendStatus(500);
});

module.exports = app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port);
  }
});
