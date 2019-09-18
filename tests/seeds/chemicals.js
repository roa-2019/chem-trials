exports.seed = knex => {
  return knex('chemicals').del()
    .then(() => {
      return knex('chemicals').insert([
        { id: 1, name: 'test name 1', company: 'test company 1', mls: 5, perlitre: 200 },
        { id: 2, name: 'test name 2', company: 'test company 2', mls: 5, perlitre: 200},
        { id: 3, name: 'test name 3', company: 'test company 3', mls: 5, perlitre: 200}
      ])
    })
}