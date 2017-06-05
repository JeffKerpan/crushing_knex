
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instrument').del()
    .then(function () {
      // Inserts seed entries
      return knex('instrument').insert([
        {id: 1, name: 'Mandolin', artist_id: 1},
        {id: 2, name: 'Fiddle', artist_id: 1},
        {id: 3, name: 'Banjo', artist_id: 2}
      ]);
    });
};
