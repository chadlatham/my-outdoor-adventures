'use strict';

exports.up = function(knex) {
  // eslint-disable-next-line max-statements
  return knex.schema.createTable('facilities', (table) => {
    table.increments();
    table.timestamps(true, true);
    table.timestamp('deleted_at').nullable();
    table.integer('ridb_facility_id').unique().notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('facilities');
};
