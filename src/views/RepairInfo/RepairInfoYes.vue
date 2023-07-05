<template>
  <div class="app-container">
    <!-- 条件查询 -->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.dormNo" placeholder="宿舍号"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchObj.repairReason" placeholder="报修类型"/>
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
      <el-table-column prop="repairID" label="报修单编号"/>
      <el-table-column prop="dormNo" label="房间号"/>
       <el-table-column prop="stuId" label="报修者学号"/>
        <el-table-column prop="repairReason" label="报修类型"/>
             <el-table-column prop="repairDate" label="报修时间"/>
               <el-table-column prop="repairNote" label="说明"/>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{ scope.row.repairStatus === 0 ? "未处理" : "已处理" }}
        </template>
      </el-table-column>

      <el-table-column label="操作"  align="center">
        <template slot-scope="scope">

          <!-- <el-button  v-if="scope.row.repairStatus==0" type="primary" size="mini"  @click="flagRepairInfo(scope.row.id,1)"> 处理当前报修信息</el-button> -->
          <el-button  v-if="scope.row.repairStatus==1" type="primary" size="mini"  @click="flagRepairInfo(scope.row.id,0)">撤销处理</el-button>   
             
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

import RepairInfo from '@/api/RepairInfo'

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

    // 定义方法，请求接口调用
    flagRepairInfo(id, ststus) {
      this.$confirm('点击确定处理当前报修信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
         RepairInfo.flagRepairInfo(id, ststus)
          .then(result => {
            this.$message({
              type: 'success',
              message: '处理成功!'
            })
            this.getList()
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消处理'
        })
      })
    },
     
  
    // 分页查询 模糊搜索查询
    getList(page = 1) {
      this.current = page
      RepairInfo.getRepairInfoYes(this.current, this.limit, this.searchObj)
        .then((response) => {
          console.log(response)
          this.list = response.data.records // 返回集合赋给list
          this.total = response.data.total // 总数
        })
        .catch((errorr) => {
          console.log(errorr)
        })
    },
    


    
  }
}
</script>
