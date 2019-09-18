
exports.up = function(knex) {
  return knex.schema.createTable('chemicals', (table) => {
    table.increments('id')
    table.string('name')
    table.string('company')
    table.integer('mls')
    table.integer('perlitre')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('chemicals')
};
