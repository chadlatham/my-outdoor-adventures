'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('adventures', (table) => {
    table.increments();
    table.timestamps(true, true);
    table.timestamp('deleted_at').nullable();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('facility_id')
      .notNullable()
      .references('id')
      .inTable('facilities')
      .onDelete('CASCADE')
      .index();
    table.timestamp('trip_from_date').notNullable();
    table.timestamp('trip_to_date').notNullable();
    table.text('review_text').notNullable();
    table.boolean('recommend').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('adventures');
};
