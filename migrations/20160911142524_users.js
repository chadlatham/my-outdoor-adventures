'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.timestamps(true, true);
    table.timestamp('deleted_at').nullable();
    table.string('user_name').unique().notNullable();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('email').unique().notNullable();
    table.specificType('hashed_email', 'char(64)').notNullable();
    table.timestamp('email_verified_at').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
