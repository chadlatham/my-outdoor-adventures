'use strict';

const Joi = require('joi');

module.exports.post = {
  options: { allowUnknownBody: false },
  body: {
    firstName: Joi.string()
      .label('User Name')
      .trim()
      .required(),
    lastName: Joi.string()
      .label('User Name')
      .trim()
      .required(),
    userName: Joi.string()
      .label('User Name')
      .trim()
      .required(),
    password: Joi.string()
      .label('Password')
      .trim()
      .min(8)
      .required(),
    email: Joi.string()
      .label('Email')
      .trim()
      .required()
  }
};

module.exports.patch = {
  options: { allowUnknownBody: false },
  body: {
    firstName: Joi.string()
      .label('User Name')
      .trim()
      .optional(),
    lastName: Joi.string()
      .label('User Name')
      .trim()
      .optional(),
    userName: Joi.string()
      .label('User Name')
      .trim()
      .optional(),
    password: Joi.string()
      .label('Password')
      .trim()
      .min(8)
      .optional(),
    email: Joi.string()
      .label('Email')
      .trim()
      .optional()
  }
};
