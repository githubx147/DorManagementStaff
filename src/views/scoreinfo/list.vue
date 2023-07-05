<template>
  <div class="app-container">
    <!-- 条件查询 -->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.scoreTime" placeholder="日期"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="searchObj.dormNo" placeholder="房间号"/>
      </el-form-item>
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="getList()">查询
      </el-button>
    </el-form>

    <!-- 工具条 -->
    <div style="padding-bottom:12px;">
      <a href="http://localhost:9999/staff/Scoreinfo/exportData" target="_top">
      <el-button type="primary"  size="mini" ><i class="fa fa-plus"/> 导出</el-button>
       </a>
    
       <el-button type="primary"  size="mini" @click="importData" ><i class="fa fa-plus"/> 导入</el-button>
    </div>

   <!-- 表单 -->
    <el-table :data="list" border style="width: 100%;font-size: 15px" @selection-change="handleSelectionChange">
      <el-table-column type="selection" />
      <el-table-column type="index" label="序号" width="55"/>
      <el-table-column prop="scoreTime" label="日期" />
      <el-table-column prop="scoreSanitary" label="整齐度"/>
      <el-table-column prop="scoreTidy" label="卫生" />
      <el-table-column prop="scoreSum" label="总分" />
      <el-table-column prop="scoreOrder" label="排名" />
      <el-table-column prop="dormNo" label="房间号" />
      

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

  <!-- 导入页面 -->
    <el-dialog :visible.sync="dialogImportVisible" title="导入" width="480px">
      <el-form label-position="right" label-width="170px">
        <el-form-item label="文件">
          <el-upload
            :multiple="false"
            :on-success="onUploadSuccess"
            :action="'http://localhost:9999/staff/Scoreinfo/importData'"
            class="upload-demo">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogImportVisible = false">
          取消
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

import scoreinfo from '@/api/scoreinfo'

export default {
  data() {
    return {
      current: 1, // 当前页
      limit: 12, // 每页显示记录数
      searchObj: {}, // 条件封装对象
      list: [], // 每页数据集合
      total: 0,
      dialogImportVisible: false,
      multipleSelection: [] // 批量选择中选择的记录列表
    }
  },
  created() {
    // 在页面渲染之前
    // 一般调用methods定义的方法，获取数据
    this.getList()
  },
  methods: {
    

     // 导入
    importData() {
      this.dialogImportVisible = true
    },
    // 上传成功调用
    onUploadSuccess() {
      // 关闭弹窗
      this.dialogImportVisible = false
      // 刷新页面
      this.getList()
    },

    // 分页查询 模糊搜索查询
    getList(page = 1) {
      this.current = page
      scoreinfo.findScoreinfo(this.current, this.limit, this.searchObj)
        .then((response) => {
          console.log(response)
          this.list = response.data.records // 返回集合赋给list
          this.total = response.data.total // 总数
        })
        .catch((errorr) => {
          console.log(errorr)
        })
    },






    removeDataById(id) {
      this.$confirm('此操作将永久宿舍信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        DormInfo.deleteDormInfo(id)
          .then(result => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getList(1)
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 获取复选框值 赋给上面定义的变量 用于后面获取id
    handleSelectionChange(selection) {
      this.multipleSelection = selection
    },
    // 批量删除
    removeRows() {
      this.$confirm('此操作将永久删除宿舍信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var idList = []
        for (var i = 0; i < this.multipleSelection.length; i++) {
          var obj = this.multipleSelection[i]
          var id = obj.id
          idList.push(id)
        }
        DormInfo.bachDormInfo(idList)
          .then(result => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getList(1)
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }

    
  }
}
</script>
