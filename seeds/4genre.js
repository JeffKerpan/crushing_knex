
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genre').del()
    .then(function () {
      // Inserts seed entries
      return knex('genre').insert([
        {id: 1, name: 'Newgrass', artist_id: 1},
        {id: 2, name: 'Bluegrass', artist_id: 2},
        {id: 3, name: 'Bluegrass', artist_id: 1},
        {id: 4, name: 'Crazy Banjo', artist_id: 2}
      ]);
    });
};
