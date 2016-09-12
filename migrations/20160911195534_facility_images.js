'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('facility_images', (table) => {
    table.increments();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('facility_images');
};
