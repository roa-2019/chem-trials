const testEnv = require('./test-environment')
const db = require('../../server/db.js')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getChems returns all chemicals', () => {
  const expected = 3
  return db.getChems(testDb)
  .then(chems => {
    const actual = chems.length
    expect(actual).toBe(expected)
  })
})