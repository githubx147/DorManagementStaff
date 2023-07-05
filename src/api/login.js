import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/staff/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/staff/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/staff/logout',
    method: 'post'
  })
}
