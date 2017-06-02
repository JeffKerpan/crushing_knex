
exports.up = function(knex, Promise) {
  return knex.schema.createTable('festival_artist', (table )=> {
    table.integer('artist_id');
    table.integer('festival_id');
    table.foreign('artist_id').references('artist.id');
    table.foreign('festival_id').references('festival.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('festival_artist');
};
