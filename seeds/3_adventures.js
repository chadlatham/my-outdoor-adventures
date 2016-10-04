/* eslint-disable max-lines */
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
        facility_id: 2,
        trip_from_date: new Date('2016-09-11 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-15 00:00:00 UTC'),
        review_text: "I had a terrible time here. The bathrooms were dirty, there were children running through my campsite, and I never got a good night's sleep!",
        recommend: false,
        img_public_id: '20160423_134936_t18rwz'
      }, {
        id: 2,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 2,
        facility_id: 2,
        trip_from_date: new Date('2016-09-06 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-08 00:00:00 UTC'),
        review_text: 'I love this place. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true,
        img_public_id: '20160423_140507_kh1fre'
      }, {
        id: 3,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 2,
        trip_from_date: new Date('2016-09-11 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-17 00:00:00 UTC'),
        review_text: "I love this adventure. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds. When I go to this place again, I'm going to bring an inflatable boat with me.",
        recommend: true,
        img_public_id: '20160423_134836_c3gqao'
      }, {
        id: 4,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 1,
        facility_id: 2,
        trip_from_date: new Date('2016-09-17 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-21 00:00:00 UTC'),
        review_text: "Went back to this place, and it wasn't so bad... Think I'm going to recommend it this time!",
        recommend: true,
        img_public_id: '20160423_134832_qge5kq'
      }, {
        id: 5,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 2,
        facility_id: 2,
        trip_from_date: new Date('2016-09-30 00:00:00 UTC'),
        trip_to_date: new Date('2016-10-02 00:00:00 UTC'),
        review_text: 'I loved this camping trip. Everyone I met was friendly, the campground was clean and well maintained, and it was nice and quiet.',
        recommend: true,
        img_public_id: '20160423_134826_fi8vuf'
      }, {
        id: 6,
        created_at: new Date('2016-09-01 00:00:00 UTC'),
        updated_at: new Date('2016-09-03 00:00:00 UTC'),
        deleted_at: null,
        user_id: 4,
        facility_id: 2,
        trip_from_date: new Date('2016-09-05 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-14 00:00:00 UTC'),
        review_text: 'I love this adventure. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true,
        img_public_id: '20160423_134823_s0s5fi'
      }, {
        id: 7,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-13 00:00:00 UTC'),
        deleted_at: null,
        user_id: 1,
        facility_id: 2,
        trip_from_date: new Date('2016-09-30 00:00:00 UTC'),
        trip_to_date: new Date('2016-10-02 00:00:00 UTC'),
        review_text: "Extremely disappointing. I wouldn't send my worst enemies to those bathrooms. There was garbage flowing out of the garbage cans. No camp hosts anywhere to be found.",
        recommend: false,
        img_public_id: '20160423_133212_bx3ycr'
      }, {
        id: 8,
        created_at: new Date('2016-09-15 00:00:00 UTC'),
        updated_at: new Date('2016-09-17 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 1,
        trip_from_date: new Date('2016-09-30 00:00:00 UTC'),
        trip_to_date: new Date('2016-10-02 00:00:00 UTC'),
        review_text: 'I love this adventure. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true,
        img_public_id: '20160423_133050_n7ly72'
      }, {
        id: 9,
        created_at: new Date('2016-09-18 00:00:00 UTC'),
        updated_at: new Date('2016-09-22 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 6,
        trip_from_date: new Date('2016-09-21 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-23 00:00:00 UTC'),
        review_text: "I don't like to complain, but we had a terrible time here. I like to explore the area when I go camping, and the trails here were all unkempt with dog messes and overgrown bushes blocking the way at every turn.",
        recommend: false,
        img_public_id: '20160423_133045_vvt0dx'
      }, {
        id: 10,
        created_at: new Date('2016-09-24 00:00:00 UTC'),
        updated_at: new Date('2016-09-27 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 6,
        trip_from_date: new Date('2016-09-30 00:00:00 UTC'),
        trip_to_date: new Date('2016-10-02 00:00:00 UTC'),
        review_text: 'This is my favorite spot to camp! The views are to die for. Even if it is a bit busy, this place has my heart.',
        recommend: true,
        img_public_id: '20160423_133040_hu5ynp'
      }, {
        id: 11,
        created_at: new Date('2016-09-17 00:00:00 UTC'),
        updated_at: new Date('2016-09-19 00:00:00 UTC'),
        deleted_at: null,
        user_id: 4,
        facility_id: 4,
        trip_from_date: new Date('2016-09-05 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-15 00:00:00 UTC'),
        review_text: "Can't wait to go back here. Best trip I have had in years.",
        recommend: true,
        img_public_id: '20160423_131334_l6zcfo'
      }, {
        id: 12,
        created_at: new Date('2016-09-14 00:00:00 UTC'),
        updated_at: new Date('2016-09-17 00:00:00 UTC'),
        deleted_at: new Date('2016-09-21 00:00:00 UTC'),
        user_id: 3,
        facility_id: 5,
        trip_from_date: new Date('2016-09-30 00:00:00 UTC'),
        trip_to_date: new Date('2016-10-02 00:00:00 UTC'),
        review_text: 'Oh, it was terrible. I would never go back there. If you want to be surrounded by aggressive bees and rabid possums them head for this place.',
        recommend: false,
        img_public_id: '20160423_125855_bxtnhi'
      }, {
        id: 13,
        created_at: new Date('2016-09-18 00:00:00 UTC'),
        updated_at: new Date('2016-09-22 00:00:00 UTC'),
        deleted_at: null,
        user_id: 2,
        facility_id: 1,
        trip_from_date: new Date('2016-09-23 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-26 00:00:00 UTC'),
        review_text: 'I love this adventure. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true,
        img_public_id: '20160423_133046_vbf3ap'
      }, {
        id: 14,
        created_at: new Date('2016-09-16 00:00:00 UTC'),
        updated_at: new Date('2016-09-19 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 2,
        trip_from_date: new Date('2016-09-22 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-27 00:00:00 UTC'),
        review_text: "Camping at Boulder Creek is a true delight. It's off the beaten path and is my home away from home. Memory of smores cooking over the fire abound.",
        recommend: true,
        img_public_id: '20160423_125840_vx9nag'
      }, {
        id: 15,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 2,
        facility_id: 3,
        trip_from_date: new Date('2016-09-18 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-25 00:00:00 UTC'),
        review_text: "Oh, it was terrible. I would never go back here. The neighbor's dogs smelled worse than a city dump, and no one seemed to care that they barked all night. I can get this in the city.",
        recommend: false,
        img_public_id: '20160423_125710_kbrzth'
      }, {
        id: 16,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 5,
        facility_id: 4,
        trip_from_date: new Date('2016-09-02 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-05 00:00:00 UTC'),
        review_text: 'What a treat going here. The woods smell so rich and sweet. Really gets me back to my roots.',
        recommend: true,
        img_public_id: '20160423_123039_mf0kam'
      }, {
        id: 17,
        created_at: new Date('2016-09-06 00:00:00 UTC'),
        updated_at: new Date('2016-09-10 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 5,
        trip_from_date: new Date('2016-09-20 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-23 00:00:00 UTC'),
        review_text: "Camping here was the worst experience I've ever had outdoors. Why people would want to pack themselves into small spaces outdoors and pretend to be homeless, I'll never know.",
        recommend: false,
        img_public_id: '20160423_122454_y2ivcx'
      }, {
        id: 18,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 4,
        facility_id: 1,
        trip_from_date: new Date('2016-09-28 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-28 00:00:00 UTC'),
        review_text: 'Things could have been better. The place was absolutely full of campers who made too much noise. The campground itself was well maintained and obviously loved. Too many people for me though.',
        recommend: true,
        img_public_id: '20160423_121155_cj91v3'
      }, {
        id: 19,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 6,
        trip_from_date: new Date('2016-09-21 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-21 00:00:00 UTC'),
        review_text: 'The campsite was filled with trash when I arrived. For $35 a night, you would think they could hire a proactive camp host.',
        recommend: false,
        img_public_id: '20160423_120507_hm3wma'
      }, {
        id: 20,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 2,
        facility_id: 8,
        trip_from_date: new Date('2016-09-05 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-14 00:00:00 UTC'),
        review_text: 'This was the best trip of the summer. The memories made here will last a lifetime.',
        recommend: true,
        img_public_id: '20160423_114955_tqhgk7'
      }, {
        id: 21,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 2,
        facility_id: 4,
        trip_from_date: new Date('2016-09-27 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-28 00:00:00 UTC'),
        review_text: "Campground host actually told us to keep our dog quiet! We go camping to get away from pushy neighbors and rules. Don't go here if you want to enjoy your trip.",
        recommend: false,
        img_public_id: '20160423_114406_jxcmvn'
      }, {
        id: 22,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 5,
        trip_from_date: new Date('2016-09-11 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-12 00:00:00 UTC'),
        review_text: 'I love this adventure. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true,
        img_public_id: '20160423_115334_xfdydw'
      }, {
        id: 23,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 4,
        facility_id: 1,
        trip_from_date: new Date('2016-09-16 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-18 00:00:00 UTC'),
        review_text: 'I love this adventure. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true,
        img_public_id: '20160423_113934_vkbwo8'
      }, {
        id: 24,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 5,
        facility_id: 2,
        trip_from_date: new Date('2016-09-21 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-23 00:00:00 UTC'),
        review_text: 'Oh, it was terrible. I would never go back here.',
        recommend: false,
        img_public_id: '20160423_114426_oivjd7'
      }, {
        id: 25,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        deleted_at: null,
        user_id: 3,
        facility_id: 3,
        trip_from_date: new Date('2016-09-22 00:00:00 UTC'),
        trip_to_date: new Date('2016-09-23 00:00:00 UTC'),
        review_text: 'I love this adventure. The trees were so beautiful, and the entire campground was in good order. Nice and quiet place away from the crowds.',
        recommend: true,
        img_public_id: '20160423_113840_taasma'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('adventures_id_seq', (SELECT MAX(id) FROM adventures));"
      );
    });
};
