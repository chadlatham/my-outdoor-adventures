/* eslint-disable camelcase */
/* eslint-disable max-len */
'use strict';

exports.seed = function(knex) {
  return knex('adventures').del()
    .then(() => {
      return knex('adventures').insert([{
        id: 1,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 1,
        facility_id: 1,
        trip_from_date: new Date('2016-09-11 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-15 00:00:00 UTC'),
        review_text: 'This place really sucks!',
        recommend: false
      }, {
        id: 2,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 2,
        facility_id: 1,
        trip_from_date: new Date('2016-09-06 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-08 00:00:00 UTC'),
        review_text: 'I love this place. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true
      }, {
        id: 3,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 1,
        trip_from_date: new Date('2016-09-11 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-17 00:00:00 UTC'),
        review_text: 'I love this adventure. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true
      }, {
        id: 4,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 1,
        facility_id: 1,
        trip_from_date: new Date('2016-09-17 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-21 00:00:00 UTC'),
        review_text: 'Went back to this place, and it wasn\'t so bad... Think I\'m going to recommend it this time!',
        recommend: true
      }, {
        id: 5,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 1,
        facility_id: 4,
        trip_from_date: new Date('2016-09-30 00:00:00 UTC'),
        trip_to_date: new Date('2016-10-02 00:00:00 UTC'),
        review_text: 'I love this adventure. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('adventures_id_seq', (SELECT MAX(id) FROM adventures));"
      );
    });
};
