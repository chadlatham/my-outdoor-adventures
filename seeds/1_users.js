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
        hashed_email: 'acc0831b7a53d9bdd52679a48229c7454f0f3358fe62c7aef98a14f2416fa14e'
      }, {
        id: 2,
        created_at: new Date('2016-09-11 00:00:00 UTC'),
        updated_at: new Date('2016-09-11 00:00:00 UTC'),
        user_name: 'jimpedersen',
        hashed_password: '$2a$12$lALLG/qdePnPmOGx9Z/9UOj6MwFPA0YkyyRv7T8TxRGYDF8WDHyH.',
        first_name: 'Jim',
        last_name: 'Pedersen',
        email: 'jp@gmail.com',
        hashed_email: '595f40b45b1ef44e1046e68a71b8d0b98801a29dcbb454ae927428a62537be2a',
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
        hashed_email: '746603fdc6ad0b97922d4580e21c11769e8d5be70449c6d778a93919b8d921ea',
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
        hashed_email: '2dae2ca599bcf7efde788c22101f57302ca3b47b16be1c1a2440e4f15820efdb',
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
        hashed_email: '42073002110b168332a215e7ed3d693432315423d07ff195b963a48552bfbd93',
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
