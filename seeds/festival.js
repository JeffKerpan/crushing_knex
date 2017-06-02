
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('festival').del()
    .then(function () {
      // Inserts seed entries
      return knex('festival').insert([
        {id: 'default', name: 'Telluride', location: 'Telluride', date: '2018-06-21', cost: 250}
      ]);
    });
};
