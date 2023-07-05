<template>
  <div class="app-container">
    <!-- 条件查询 -->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.visitorDorm" placeholder="访问房间号"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchObj.visitorForName" placeholder="被访问人员姓名"/>
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
      <el-table-column type="index" label="序号"  width="55"/>
      <el-table-column prop="visitorName" label="访客姓名" width="150"/>
      <el-table-column prop="visitorSex" label="性别"/>
      <el-table-column prop="visitorDorm" label="访问房间号" />
      <el-table-column prop="visitorStuID" label="访问学生学号"/>
      <el-table-column prop="visitorForName" label="被访问人员姓名"/>
      <el-table-column prop="createTime" label="访问时间" />
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
import visitorinfo from '@/api/visitorinfo'

export default {
  data() {
    return {
      current: 1, // 当前页
      limit: 8, // 每页显示记录数
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
      visitorinfo.findVisitorInfo(this.current, this.limit, this.searchObj)
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
