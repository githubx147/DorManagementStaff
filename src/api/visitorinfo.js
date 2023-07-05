import request from '@/utils/request'

export default {

  // 分页查询宿舍信息
  findVisitorInfo(current, limit, searchObj) {
    return request({
      url: `/staff/VisitorInfo/findVisitorInfo/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json传递
    })
  },

 
  //添加宿舍信息
  addVisitorInfo(VisitorInfo) {
    return request({
      url: `/staff/VisitorInfo/addVisitorInfo`,
      method: 'post',
      data: VisitorInfo
    })
  }
 


}
