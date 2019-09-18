import request from 'superagent'

const rootUrl = '/api/v1/chemicals'

export function getChems () {
  return request.get(rootUrl + '/')
}
