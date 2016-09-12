/* eslint-disable camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('facility_images').del()
    .then(() => {
      return knex('facility_images').insert([{
        id: 1,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63671.jpg'
      }, {
        id: 2,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63673.jpg'
      }, {
        id: 3,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63752.jpg'
      }, {
        id: 4,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63786.jpg'
      }, {
        id: 5,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63814.jpg'
      }, {
        id: 6,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63824.jpg'
      }, {
        id: 7,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: new Date('2016-09-11 00:00:00 UTC'),
        facility_id: 2,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63824.jpg'
      }, {
        id: 8,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64041.jpg'
      }, {
        id: 9,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64077.jpg'
      }, {
        id: 10,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64083.jpg'
      }, {
        id: 11,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64127.jpg'
      }, {
        id: 12,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64137.jpg'
      }, {
        id: 13,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64154.jpg'
      }, {
        id: 14,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63917.jpg'
      }, {
        id: 15,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63918.jpg'
      }, {
        id: 16,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64085.jpg'
      }, {
        id: 17,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64113.jpg'
      }, {
        id: 18,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64139.jpg'
      }, {
        id: 19,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64144.jpg'
      }, {
        id: 20,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63939.jpg'
      }, {
        id: 21,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/63952.jpg'
      }, {
        id: 22,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64028.jpg'
      }, {
        id: 23,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64098.jpg'
      }, {
        id: 24,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64133.jpg'
      }, {
        id: 25,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        image_url: 'http://ridb.recreation.gov/images/64162.jpg'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('facility_images_id_seq', (SELECT MAX(id) FROM facility_images));" // eslint-disable-line max-len
      );
    });
};

// facility_id: foreign key, required
// createdAt: timestamp, required
// updatedAt: timestamp, required
// deletedAt: timestamp, optional
// image_url: varchar(255)
// adventure_id: foreign key, optional!!!!!!!!!!
