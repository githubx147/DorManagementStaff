import request from '@/utils/request'

export default {

  // 分页查询离校学生
  findLeaveSchool(current, limit, searchObj) {
    return request({
      url: `/staff/InregisterInfo/findLeaveSchool/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json传递
    })
  },

  // 分页查询入校学生
  findEnterSchool(current, limit, searchObj) {
    return request({
      url: `/staff/InregisterInfo/findEnterSchool/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json传递
    })
  },
  

  // 离校操作
  LeaveSchool(stuId) {
    return request({
      url: `/staff/InregisterInfo/LeaveSchool/${stuId}`,
      method: 'put'
    })
  },

  // 入校操作
  enterSchool(id) {
    return request({
      url: `/staff/InregisterInfo/enterSchool/${id}`,
      method: 'put'
    })
  }

}
