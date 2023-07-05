<template>
  <div class="app-container" style="font-size: 15px">
    <el-form label-width="120px">
      <el-form-item label="姓名">
        <el-input  v-model="visitorinfo.visitorName" style="width:200px"  />
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="visitorinfo.visitorSex" style="width:200px"/>
      </el-form-item>
      <el-form-item label="被访问人员学号">
        <el-input v-model="visitorinfo.visitorStuID" style="width:200px"/>
      </el-form-item>
        

      <el-form-item>
        <el-button type="primary" @click="save()">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import visitorinfo from '@/api/visitorinfo'

export default {
  data() {
    return {
      visitorinfo: {}
    }
  },
  created() {
   
},
  methods: {
  
    // 添加
    save() {
      visitorinfo.addVisitorInfo(this.visitorinfo)
        .then(result => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          // 跳转
          this.$router.push({ path: '/visitorinfo/list' })
        })
    }  

  }

}

</script>
