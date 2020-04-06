import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'post',
    data
  })
}
