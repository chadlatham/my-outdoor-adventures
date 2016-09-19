'use strict';

const Joi = require('joi');

module.exports.post = {
  options: { allowUnknownBody: false },
  body: {
    userName: Joi.string()
      .label('User Name')
      .trim()
      .required(),
    password: Joi.string()
      .label('Password')
      .trim()
      .required()
  }
};
