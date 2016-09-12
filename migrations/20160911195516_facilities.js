'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('facilities', (table) => {
    table.increments();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('facilities');
};
