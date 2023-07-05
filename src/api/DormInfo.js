import request from '@/utils/request'

export default {

  // 分页查询宿舍信息
  getDormInfoList(current, limit, searchObj) {
    return request({
      url: `/admin/DormInfo/findDormInfo/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json传递
    })
  },

  // 删除宿舍信息
  deleteDormInfo(id) {
    return request({
      url: `/admin/DormInfo/${id}`,
      method: 'delete'
    })
  },

  // 批量删除宿舍信息
  bachDormInfo(idList) {
    return request({
      url: `/admin/DormInfo/bathRemoveDormInfo`,
      method: 'delete',
      data: idList
    })
  },

  //添加宿舍信息
  saveDormInfo(DormInfo) {
    return request({
      url: `/admin/DormInfo/addDormInfo`,
      method: 'post',
      data: DormInfo
    })
  },

  //修改宿舍信息
  updateDormInfo(DormInfo) {
    return request({
      url: `/admin/DormInfo/updateDormInfo`,
      method: 'post',
      data: DormInfo
    })
  }
//
//
//       //根据id获取宿舍信息
//      getStaffInfoById(){
//                 return request({
//                 url: `/admin/staffInfo/getStaffInfo/${id}`,
//                 method: 'get'
//              })
//         }


}
