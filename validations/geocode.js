'use strict';

const Joi = require('joi');

module.exports.get = {
  options: {
    allowUnknownQuery: false
  },
  query: {
    city: Joi.string()
      .label('City')
      .trim()
      .optional(),
    state: Joi.string()
      .label('State')
      .trim()
      .optional()
  }
};
