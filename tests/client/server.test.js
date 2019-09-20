const request = require('supertest')
const { getChemById } = require('../../server/db')

jest.mock('../../server/db', () => ({
  getChems: () => Promise.resolve([{},{}]),
  getChemById: jest.fn(() => Promise.resolve ([{}, {}]))

}))

const server = require('../../server/server')

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
    })
    .catch(err => expect(err).toBeNull())
})


test('home route is successfully loading', () => {
  return request(server)
  .get('/api/v1/chemicals')
  .expect(200)
  .then(res => {
    expect(res.body.chems.length).toBe(2)
  })
})

test('/calculator/3 returns correctly', () => {
  return request(server)
  .get('/api/v1/chemicals/calculator/3')
  .then(res => {
    expect(getChemById).toHaveBeenCalledWith('3')
    expect(res.body.length).toBe(2)
  })
})