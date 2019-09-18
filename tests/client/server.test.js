const request = require('supertest')
const cheerio = require('cheerio')

// jest.mock('../db', () => ({
//   getUser: (id) => Promise.resolve(
//     {id: id, name: 'test user', email: 'test@user.nz'}
//   ),
//   getUsers: () => Promise.resolve([
//     {id: 2, name: 'test user 2', email: 'test2@user.nz'},
//     {id: 4, name: 'test user 4', email: 'test4@user.nz'}
//   ])
// }))

const server = require('../../server/server')

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
    })
    .catch(err => expect(err).toBeNull())
})