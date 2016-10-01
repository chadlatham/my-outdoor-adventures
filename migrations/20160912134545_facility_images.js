'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('facility_images', (table) => {
    table.increments();
    table.timestamps(true, true);
    table.timestamp('deleted_at').nullable();
    table.integer('facility_id')
      .notNullable()
      .references('id')
      .inTable('facilities')
      .onDelete('CASCADE')
      .index();
    table.integer('adventure_id')
      .nullable()
      .references('id')
      .inTable('adventures')
      .onDelete('CASCADE')
      .index();
    table.string('public_id').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('facility_images');
};
