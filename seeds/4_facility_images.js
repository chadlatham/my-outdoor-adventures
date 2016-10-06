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
        public_id: '20160423_115006_xfkifx'
      }, {
        id: 2,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        public_id: '20160423_140507_kh1fre'
      }, {
        id: 3,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        public_id: '20160423_134836_c3gqao'
      }, {
        id: 4,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        public_id: '20160423_134832_qge5kq'
      }, {
        id: 5,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        public_id: '20160423_134826_fi8vuf'
      }, {
        id: 6,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 2,
        adventure_id: null,
        public_id: '20160423_134823_s0s5fi'
      }, {
        id: 7,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: new Date('2016-09-11 00:00:00 UTC'),
        facility_id: 2,
        adventure_id: null,
        public_id: '20160423_133212_bx3ycr'
      }, {
        id: 8,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        public_id: '20160423_133050_n7ly72'
      }, {
        id: 9,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        public_id: '20160423_133045_vvt0dx'
      }, {
        id: 10,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        public_id: '20160423_133040_hu5ynp'
      }, {
        id: 11,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        public_id: '20160423_131334_l6zcfo'
      }, {
        id: 12,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        public_id: '20160423_125855_bxtnhi'
      }, {
        id: 13,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 3,
        adventure_id: null,
        public_id: '20160423_133046_vbf3ap'
      }, {
        id: 14,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        public_id: '20160423_125840_vx9nag'
      }, {
        id: 15,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        public_id: '20160423_125710_kbrzth'
      }, {
        id: 16,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        public_id: '20160423_123039_mf0kam'
      }, {
        id: 17,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        public_id: '20160423_122454_y2ivcx'
      }, {
        id: 18,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        public_id: '20160423_121155_cj91v3'
      }, {
        id: 19,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 4,
        adventure_id: null,
        public_id: '20160423_120507_hm3wma'
      }, {
        id: 20,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        public_id: '20160423_114955_tqhgk7'
      }, {
        id: 21,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        public_id: '20160423_114406_jxcmvn'
      }, {
        id: 22,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        public_id: '20160423_115334_xfdydw'
      }, {
        id: 23,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        public_id: '20160423_113934_vkbwo8'
      }, {
        id: 24,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        public_id: '20160423_114426_oivjd7'
      }, {
        id: 25,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        facility_id: 5,
        adventure_id: null,
        public_id: '20160423_113840_taasma'
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
