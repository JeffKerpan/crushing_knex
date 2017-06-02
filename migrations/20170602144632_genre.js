
exports.up = function(knex, Promise) {
  return knex.schema.createTable('genre', (table )=> {
    table.increments();
    table.text('name');
    table.integer('artist_id').unsigned();
    table.foreign('artist_id').references('artist.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('genre');
};
