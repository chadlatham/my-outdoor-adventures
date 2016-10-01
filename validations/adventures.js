'use strict';

const Joi = require('joi');

module.exports.post = {
  options: {
    allowUnknownBody: false
  },
  body: {
    ridbFacilityId: Joi.number()
      .label('FacilityID')
      .integer()
      .min(1)
      .required(),
    recommend: Joi.boolean()
      .label('Recommend')
      .required(),
    imgPublicId: Joi.string()
      .label('Image Public ID')
      .trim()
      .required(),
    reviewText: Joi.string()
      .label('Review Text')
      .trim()
      .min(25),
    tripFromDate: Joi.date()
      .label('Trip From Date')
      .required(),
    tripToDate: Joi.date()
      .label('Trip To Date')
      .required()
  }
};
