
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getChems: getChems,
  getChemById: getChemById
}

function getChems (db = connection) {
  return db('chemicals').select()
}

function getChemById (id, db = connection) {
  return db('chemicals').where('chemicals.id', id).select()
}
