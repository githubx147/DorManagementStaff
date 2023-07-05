<template>
  <div class="app-container">
    <!-- 条件查询 -->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.stuId" placeholder="学号"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchObj.stuName" placeholder="姓名"/>
      </el-form-item>
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="getList()">查询
      </el-button>
    </el-form>


   <!-- 表单 -->
    <el-table :data="list" border style="width: 100%;font-size: 15px">
      <el-table-column type="selection" />
      <el-table-column type="index" label="序号" width="60"/>
      <el-table-column prop="inregisterId" label="编号"/>
      
       <el-table-column prop="stuId" label="学号"/>
        <el-table-column prop="stuName" label="姓名"/>
        <!-- <el-table-column prop="stuStatus" label="动作"/> -->
        <el-table-column prop="inregisterTime" label="离校时间"/>
        <el-table-column prop="updateTime" label="入校时间"/>
      
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :current-page="current"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />


  </div>
</template>

<script>

import inregister from '@/api/inregister'

export default {
  data() {
    return {
      current: 1, // 当前页
      limit: 11, // 每页显示记录数
      searchObj: {}, // 条件封装对象
      list: [], // 每页数据集合
      total: 0     
    }
  },
  created() {
    // 在页面渲染之前
    // 一般调用methods定义的方法，获取数据
    this.getList()
  },
  methods: {
     
    // 分页查询 模糊搜索查询
    getList(page = 1) {
      this.current = page
      inregister.findEnterSchool(this.current, this.limit, this.searchObj)
        .then((response) => {
          console.log(response)
          this.list = response.data.records // 返回集合赋给list
          this.total = response.data.total // 总数
        })
        .catch((errorr) => {
          console.log(errorr)
        })
    }
    


    
  }
}
</script>
