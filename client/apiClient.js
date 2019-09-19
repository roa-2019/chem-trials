import request from 'superagent'

const rootUrl = '/api/v1/chemicals'

export function getChems () {
  return request.get(rootUrl + '/')
}

export function getChemById (id) {
  return request.get(rootUrl + `/calculator/${id}`)
}