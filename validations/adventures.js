'use strict';

const Joi = require('joi');

module.exports.post = {
  options: {
    allowUnknownBody: false
  },
  body: {
    facilityName: Joi.string()
      .label('Facility Name')
      .trim()
      .required(),
    imgPublicId: Joi.string()
      .label('Image Public ID')
      .trim()
      .required(),
    recommend: Joi.boolean()
      .label('Recommend')
      .required(),
    reviewText: Joi.string()
      .label('Review Text')
      .trim()
      .min(25),
    ridbFacilityId: Joi.number()
      .label('Facility ID')
      .integer()
      .min(1)
      .required(),
    tripFromDate: Joi.date()
      .label('Trip From Date')
      .required(),
    tripToDate: Joi.date()
      .label('Trip To Date')
      .required()
  }
};

module.exports.get = {
  options: {
    allowUnknownParams: false
  },
  params: {
    userName: Joi.string()
      .label('User Name')
      .trim()
      .required()
  }
};
