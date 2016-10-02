/* eslint-disable camelcase */
/* eslint-disable max-len */
'use strict';

exports.seed = function(knex) {
  return knex('facilities').del()
    .then(() => {
      return knex('facilities').insert([{
        id: 1,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        ridb_facility_id: 201792,
        facility_name: 'Liberty Campground'
      }, {
        id: 2,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        ridb_facility_id: 232023,
        facility_name: 'Boulder Creek Campground'
      }, {
        id: 3,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        ridb_facility_id: 232033,
        facility_name: 'The Dalles Campground'
      }, {
        id: 4,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        ridb_facility_id: 232035,
        facility_name: 'Denny Creek Campground'
      }, {
        id: 5,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        ridb_facility_id: 232074,
        facility_name: 'Money Creek Campground'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('facilities_id_seq', (SELECT MAX(id) FROM facilities));"
      );
    });
};
