import request from 'superagent'

const rootUrl = '/api/v1/chemicals'

export function getFruits () {
  return request.get(rootUrl + '/')
}
