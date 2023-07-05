<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <breadcrumb />
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            首页
          </el-dropdown-item>
        </router-link>

        <el-dropdown-item divided>
          <span style="display:block;" @click="getid()">修改密码</span>
        </el-dropdown-item>

        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">退出登录</span>
        </el-dropdown-item> 

      </el-dropdown-menu>
    </el-dropdown>

     <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="480px">
            <el-form>
                    <el-form-item label="请输入新密码" label-width="120" >
                    <el-input v-model="staffAccount.staPassword" autocomplete="off"></el-input>
                    </el-form-item>
                    </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="updatepasswod()">确 定</el-button>
                </div>
            </el-dialog>

  </el-menu>

  
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import request from '@/utils/request'

export default {
data() {
    return {
     dialogFormVisible: false,  //用于修改密码页面的展示和隐藏      
     staffAccount:{}  //用于修改密码
    }
  },
   components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
       //修改密码
  getid(){
        var staId =this.$store.getters.name
        this.staffAccount={staId,staId}
        console.log(this.staffAccount)
        // alert(this.stainfo.staId)
        this.dialogFormVisible = true //这里获取到id后打开改密码页面
    },
     // 修改密码
    updatepasswod() {
        return request({
        url: `/staff/AccountStaff/upDatePassword`,
        method:'post',
        data: this.staffAccount
        }).then(result => {
         this.dialogFormVisible = false
         this.$message({
            type: 'success',
            message: '修改成功!'
          })
      })
    },




    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

