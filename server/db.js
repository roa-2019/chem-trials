
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getChems
}

function getChems (db = connection) {
  return db('chemicals').select()
}
