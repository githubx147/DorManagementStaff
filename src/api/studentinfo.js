import request from '@/utils/request'

export default {

  // 分页查询学生信息
  getStudentInfoList(current, limit, searchObj) {
    return request({
      url: `/staff/StudentInfo/findStudentInfo/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json传递
    })
  }

}
