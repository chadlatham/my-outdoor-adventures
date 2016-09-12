'use strict';

exports.up = function(knex) {
  // eslint-disable-next-line max-statements
  return knex.schema.createTable('facilities', (table) => {
    table.increments();
    table.timestamps(true, true);
    table.timestamp('deleted_at').nullable();
    table.integer('ridb_facility_id').unique().notNullable();
    table.string('facility_name').notNullable().defaultTo('');
    table.string('facility_email').notNullable().defaultTo('');
    table.float('facility_latitude', 17, 14).nullable();
    table.float('facility_longitude', 17, 14).nullable();
    table.text('facility_description').notNullable().defaultTo('');
    table.string('facility_type_description').notNullable().defaultTo('');
    table.string('facility_phone').notNullable().defaultTo('');
    table.string('facility_map_url').notNullable().defaultTo('');
    table.string('facility_reservation_url').notNullable().defaultTo('');
    table.text('facility_directions').notNullable().defaultTo('');
    table.text('keywords').notNullable().defaultTo('');
    table.string('facility_use_fee_description').notNullable().defaultTo('');
    table.string('stay_limit').notNullable().defaultTo('');
    table.timestamp('last_updated_date').nullable();
    table.string('facility_ada_access').notNullable().defaultTo('');
    table.string('legacy_facility_id').notNullable().defaultTo('');
    table.string('org_facility_id').notNullable().defaultTo('');
    table.string('facility_address_type').notNullable().defaultTo('');
    table.string('facility_street_address1').notNullable().defaultTo('');
    table.string('facility_street_address2').notNullable().defaultTo('');
    table.string('facility_street_address3').notNullable().defaultTo('');
    table.string('city').notNullable().defaultTo('');
    table.string('address_state_code').notNullable().defaultTo('');
    table.string('postal_code').notNullable().defaultTo('');
    table.string('address_country_code').notNullable().defaultTo('');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('facilities');
};
