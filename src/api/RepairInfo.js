import request from '@/utils/request'

export default {

  // 分页查询未处理报修单
  getRepairInfoNo(current, limit, searchObj) {
    return request({
      url: `/staff/RepairInfo/findRepairInfoNo/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json传递
    })
  },

  // 分页查询已处理报修单
  getRepairInfoYes(current, limit, searchObj) {
    return request({
      url: `/staff/RepairInfo/findRepairInfoYes/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json传递
    })
  },
  


  // 标记保修单是否处理
  flagRepairInfo(id, status) {
    return request({
      url: `/staff/RepairInfo/flagRepairInfo/${id}/${status}`,
      method: 'put'
    })
  }

}
