
exports.up = function(knex, Promise) {
  return knex.schema.createTable('festival', (table )=> {
    table.increments();
    table.text('name');
    table.text('location');
    table.date('date');
    table.integer('cost');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('festival');
};
