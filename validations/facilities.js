'use strict';

const Joi = require('joi');

module.exports.get = {
  options: {
    allowUnknownQuery: false
  },
  query: {
    latitude: Joi.number()
      .label('Latitude')
      .optional(),
    longitude: Joi.number()
      .label('Longitude')
      .optional(),
    radius: Joi.number()
      .label('Radius')
      .integer()
      .required(),
    query: Joi.string()
      .label('Query')
      .trim()
      .optional(),
    limit: Joi.number()
      .label('Limit')
      .integer()
      .min(1)
      .max(50)
      .optional(),
    offset: Joi.number()
      .label('Offset')
      .integer()
      .min(0)
      .optional()
  }
};

module.exports.getID = {
  options: {
    allowUnknownParams: false
  },
  params: {
    facilityID: Joi.number()
      .label('FacilityID')
      .integer()
      .min(1)
      .required()
  }
};
