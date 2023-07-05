<template>
  <div class="dashboard-container">
    <div class="dashboard-text">当前用户:{{ name }}</div>
    <div class="dashboard-text" style="display:none">roles:<span v-for="(role,index) in roles" :key="index">{{ role }}</span></div>


  <el-form style="margin-top:30px" label-position="left" label-width="85px">
        <el-form-item label="姓名">
          <el-input v-model="stainfo.staName" :disabled=true style="width:200px" ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="stainfo.staSex"  style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="stainfo.staAge"  style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="管理宿舍号">
          <el-input v-model="stainfo.dormId" :disabled=true style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="stainfo.staPhone"  style="width:200px"></el-input>
        </el-form-item>
         <el-form-item>
        <el-button type="primary" @click="updateById()">保存</el-button>
      </el-form-item>
  </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import request from '@/utils/request'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  data() {
      return {
          stainfo: {}//双向绑定 获取当前用户的值
      }
  },
  created() {
    // 在页面渲染之前
    this.findAllByStaId(this.$store.getters.name)
  },
  methods: {  
    // 定义方法，请求接口调用

    //根据编号查询职工信息
     findAllByStaId(StaId) {
      return request({
        url: `/staff/Main/findAllByStaId/${StaId}`,
        method: 'get'
      }).then(result => {
        this.stainfo = result.data[0]
      })
    },

    // 修改个人信息
    updateById(){
       return request({
        url: `/staff/Main/updateById`,
        method:'post',
        data: this.stainfo
        }).then(result => {
         this.$message({
            type: 'success',
            message: '修改成功!'
          })
      })
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
