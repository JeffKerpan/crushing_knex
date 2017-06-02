
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {festival_id: 1, artist_id: 1},
        {festival_id: 1, artist_id: 2}
      ]);
    });
};
