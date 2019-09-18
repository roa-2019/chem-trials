
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chemicals').del()
    .then(function () {
      // Inserts seed entries
      return knex('chemicals').insert([
        {id: 1, name: 'Flourish', company: 'Seachem', mls: 5, perlitre: 250},
        {id: 2, name: 'Flourish Excel', company: 'Seachem', mls: 5, perlitre: 200},
        {id: 3, name: 'Stability - New Tank', company: 'Seachem', mls: 5, perlitre: 40},
        {id: 4, name: 'Stability - Water Change', company: 'Seachem', mls: 5, perlitre: 80},
        {id: 5, name: 'Prime', company: 'Seachem', mls: 5, perlitre: 200},
        {id: 6, name: 'Stresscoat', company: 'Api', mls: 5, perlitre: 38},
        {id: 7, name: 'Melafix', company: 'Api', mls: 5, perlitre: 38},
        {id: 8, name: 'Pimafix', company: 'Api', mls: 5, perlitre: 38}
      ]);
    });
};
