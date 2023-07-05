<template>
  <div class="app-container" style="font-size: 15px">
    <el-form label-width="120px">
      <el-form-item label="日期">
        <el-input  v-model="ScoreInfo.scoreTime" style="width:200px"  />
      </el-form-item>
      <el-form-item label="整齐度">
        <el-input v-model="ScoreInfo.scoreSanitary" style="width:200px"/>
      </el-form-item>
      <el-form-item label="卫生">
        <el-input v-model="ScoreInfo.scoreTidy" style="width:200px"/>
      </el-form-item>
       <el-form-item label="总分">
        <el-input v-model="ScoreInfo.scoreSum" style="width:200px"/>
      </el-form-item>
       <el-form-item label="排名">
        <el-input v-model="ScoreInfo.scoreOrder" style="width:200px"/>
      </el-form-item>
       <el-form-item label="房间号">
        <el-input v-model="ScoreInfo.dormNo" style="width:200px"/>
      </el-form-item>
        

      <el-form-item>
        <el-button type="primary" @click="save()">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import scoreinfo from '@/api/scoreinfo'

export default {
  data() {
    return {
      ScoreInfo: {}
    }
  },
  created() {
   
},
  methods: {
  
    // 添加
    save() {
      scoreinfo.addScoreInfo(this.ScoreInfo)
        .then(result => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          // 跳转
          this.$router.push({ path: '/scoreinfo/list' })
        })
    }  

  }

}

</script>
