
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('festival_artist').del()
    .then(function () {
      // Inserts seed entries
      return knex('festival_artist').insert([
        {festival_id: 1, artist_id: 1},
        {festival_id: 1, artist_id: 2}
      ]);
    });
};
