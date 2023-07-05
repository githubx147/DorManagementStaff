<template>
  <div class="app-container">
    <!-- 条件查询 -->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.stuId" placeholder="学生学号"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchObj.stuName" placeholder="学生姓名"/>
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
      <el-table-column prop="stuId" label="学号" width="150"/>
      <el-table-column prop="stuName" label="姓名" width="80"/>
      <el-table-column prop="stuSex" label="性别" width="55" />
      <el-table-column prop="stuage" label="年龄" width="55"/>
      <el-table-column prop="stuGrade" label="年级" width="55"/>
      <el-table-column prop="stuAcademy" label="学院"/>
      <el-table-column prop="stuMajor" label="专业" width="280" />
      <el-table-column prop="stuClass" label="班级" />
      <el-table-column prop="stuaddr" label="地址" />
      <el-table-column prop="dormNo" label="宿舍号" width="70"/>
      <el-table-column prop="stuPhone" label="电话" width="150"/>
      <el-table-column prop="stuStatus" label="状态" />

      <el-table-column label="操作"  align="center">
        <template slot-scope="scope">

          <el-button  v-if="scope.row.stuStatus=='在校'" type="primary" size="mini"  @click="LeaveSchool(scope.row.stuId)">离校操作</el-button>
          <!-- <el-button  v-if="scope.row.repairStatus==1" type="primary" size="mini" icon="el-icon-unlock" @click="flagRepairInfo(scope.row.id,0)">已处理</el-button>    -->
             
        </template>
      </el-table-column>
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
import studentinfo from '@/api/studentinfo'
import inregister from '@/api/inregister'

export default {
  data() {
    return {
      current: 1, // 当前页
      limit: 13, // 每页显示记录数
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
      //离校操作
     LeaveSchool(stuId) {
      this.$confirm('点击确定设置成离校?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
         inregister.LeaveSchool(stuId)
          .then(result => {
            this.$message({
              type: 'success',
              message: '成功!'
            })
            this.getList()
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },


     // 分页查询 模糊搜索查询
    getList(page = 1) {
      this.current = page
      studentinfo.getStudentInfoList(this.current, this.limit, this.searchObj)
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
