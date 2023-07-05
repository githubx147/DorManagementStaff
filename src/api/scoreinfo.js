import request from '@/utils/request'

export default {

  // 分页评分
  findScoreinfo(current, limit, searchObj) {
    return request({
      url: `/staff/Scoreinfo/findScoreinfo/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json传递
    })
  },

  
  //添加评分
  addScoreInfo(ScoreInfo) {
    return request({
      url: `/staff/Scoreinfo/addScoreInfo`,
      method: 'post',
      data: ScoreInfo
    })
  }

}
