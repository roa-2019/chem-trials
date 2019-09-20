import nock from 'nock'

import {
  getChems,
  getChemById
} from '../../client/apiClient'

test('getChems api', () => {
  const scope = nock('http://localhost')
  .get('/api/v1/chemicals/')
  .reply(200, {chems: [{name: "Flourish"}]})

  return getChems('api/v1/chemicals/')
  .then (res => {
    expect(200)
    expect(res.body.chems[0].name).toBe('Flourish')
    scope.done()
  })
  }
)

test('getChemById api', () => {
  const scope = nock('http://localhost')
  .get('/api/v1/chemicals/calculator/4')
  .reply(200, [{name: "Flourish"}])

  return getChemById(4)
  .then (res => {
    expect(200)
    expect(res.body[0].name).toBe('Flourish')
    scope.done()
  })
  }
)