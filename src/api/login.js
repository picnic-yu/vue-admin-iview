import request from '../libs/utils/request';
export function login(username, password) {
  return request({
    url: '/management-api/tokens/login?username=' + username + '&password=' + password,
    method: 'get'
  })
}

export function getInfo(token) {
  return request({
    url: '/web/organizations/principals/' + token.split('_')[0],
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/web/token/logout.do',
    method: 'post'
  })
}
