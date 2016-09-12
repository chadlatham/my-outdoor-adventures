/* eslint-disable camelcase */
/* eslint-disable max-len */
'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        user_name: 'chadlatham',
        hashed_password: '$2a$12$lALLG/qdePnPmOGx9Z/9UOj6MwFPA0YkyyRv7T8TxRGYDF8WDHyH.',
        first_name: 'Chad',
        last_name: 'Latham',
        email: 'chadlatham33@gmail.com',
        hashed_email: '$2a$12$jilMGESJSVSqSifH04gaIu8YqbMPqj05.pYrYWH92bl78aoY3pPUK',
      }, {
        id: 2,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        user_name: 'jimpedersen',
        hashed_password: '$2a$12$lALLG/qdePnPmOGx9Z/9UOj6MwFPA0YkyyRv7T8TxRGYDF8WDHyH.',
        first_name: 'Jim',
        last_name: 'Pedersen',
        email: 'jp@gmail.com',
        hashed_email: '$2a$12$we.vvjz9hnKevPSgdweev.COhotezoqZzX1A5IPY8E/8kMu/cSLDS',
        email_verified_at: new Date('2016-09-11 01:00:00 UTC')
      }, {
        id: 3,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        user_name: 'corypedersen',
        hashed_password: '$2a$12$lALLG/qdePnPmOGx9Z/9UOj6MwFPA0YkyyRv7T8TxRGYDF8WDHyH.',
        first_name: 'Cory',
        last_name: 'Pedersen',
        email: 'corypedersen@gmail.com',
        hashed_email: '$2a$12$BcTXp/urk5m7c7VWYSiJueTZsKD3UW0FmBiHINQFip78cQqyaw9v.',
        email_verified_at: new Date('2016-09-11 01:00:00 UTC')
      }, {
        id: 4,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        user_name: 'gabrieljang',
        hashed_password: '$2a$12$lALLG/qdePnPmOGx9Z/9UOj6MwFPA0YkyyRv7T8TxRGYDF8WDHyH.',
        first_name: 'Gabriel',
        last_name: 'Jang',
        email: 'something@gmail.com',
        hashed_email: '$2a$12$Xra5G7Eh2.4KUw9jtw933.58FLBxluqLM9.kY4ExiGNmlz8BRUI0.',
        email_verified_at: new Date('2016-09-11 01:00:00 UTC')
      }, {
        id: 5,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        user_name: 'deleteduser',
        hashed_password: '$2a$12$lALLG/qdePnPmOGx9Z/9UOj6MwFPA0YkyyRv7T8TxRGYDF8WDHyH.',
        first_name: 'ThisOne',
        last_name: 'Deleted',
        email: 'deleted@gmail.com',
        hashed_email: '$2a$12$mUYxTkqUVRcqN29If722Uu2KgmrEXS5Zqt1sPTuEf5w9F3FcbJ5Mi',
        email_verified_at: new Date('2016-09-11 01:00:00 UTC'),
        deleted_at: new Date('2016-09-11 02:00:00 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
