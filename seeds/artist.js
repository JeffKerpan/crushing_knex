
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      // Inserts seed entries
      return knex('artist').insert([
        {id: 1, name: 'Sam Bush'},
        {id: 1, name: 'Bela Fleck'}
      ]);
    });
};
