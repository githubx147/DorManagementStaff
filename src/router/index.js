import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'





/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [{
  path: '/login',
  component: () =>
    import ('@/views/login/index'),
  hidden: true
},
  {
    path: '/404',
    component: () =>
      import ('@/views/404'),
    hidden: true
  },


  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard/index',
  //   name: '校园宿舍管理系统',
  //   meta: {title: '校园宿舍管理系统', icon: 'el-icon-orange'},
  //   children: [{
  //     path: 'index',
  //     component: () =>
  //       import ('@/views/dashboard/index'),
  //       meta: {title: '校园宿舍管理系统', icon: 'table'}
  //   }]
  // },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '校园宿舍管理系统',
    meta: { title: '校园宿舍管理系统', icon: 'drom' },
    // hidden: true,
    alwaysShow: true,
    children: [{
      path: 'dashboard',
      component: () =>
          import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'home' }
    }]
  },
  {
    path: '/studentInfo',
    component: Layout,
    redirect: '/example/list',
    name: '学生信息管理',
    meta: {title: '学生信息管理', icon: 'student'},
    children: [{
      path: 'list',
      name: '学生信息列表',
      component: () =>
        import ('@/views/studentInfo/list'),
      meta: {title: '学生信息列表', icon: 'student'}
    }
    ]
  },

  {
    path: '/RepairInfo',
    component: Layout,
    redirect: '/example/list',
    name: '报修单管理',
    meta: {title: '报修单管理', icon: 'baoxiugl'},
    children: [

      {
        path: 'RepairInfoNo',
        name: '已处理报修单',
        component: () =>
          import ('@/views/RepairInfo/RepairInfoNo'),
        meta: {title: '未处理报修单', icon: 'wchuli'}
      },
    {
      path: 'RepairInfoYes',
      name: '未处理报修单',
      component: () =>
        import ('@/views/RepairInfo/RepairInfoYes'),
      meta: {title: '已处理报修单', icon: 'ychuli'}
    }
    
    ]
  },

  {
    path: '/inregister',
    component: Layout,
    redirect: '/example/list',
    name: '入校离校管理',
    meta: {title: '入校离校管理', icon: 'churu'},
    children: [

      {
        path: 'inregisterNo',
        name: '离校中',
        component: () =>
          import ('@/views/inregister/inregisterNo'),
        meta: {title: '离校中', icon: 'chu'}
      },
    {
      path: 'inregisterYes',
      name: '已入校',
      component: () =>
        import ('@/views/inregister/inregisterYes'),
      meta: {title: '已入校', icon: 'ru'}
    }
    
    ]
  },

  {
    path: '/scoreinfo',
    component: Layout,
    redirect: '/example/list',
    name: '宿舍评分管理',
    meta: {title: '宿舍评分管理', icon: 'pfgl'},
    children: [

      {
        path: 'add',
        name: '评分录入',
        component: () =>
          import ('@/views/scoreinfo/add'),
        meta: {title: '评分录入', icon: 'lr'}
      },
    {
      path: 'list',
      name: '评分列表',
      component: () =>
        import ('@/views/scoreinfo/list'),
      meta: {title: '评分列表', icon: 'lb'}
    }
    
    ]
  },

  {
    path: '/visitorinfo',
    component: Layout,
    redirect: '/example/list',
    name: '来访人员管理',
    meta: {title: '来访人员管理', icon: 'admin'},
    children: [

      {
        path: 'add',
        name: '来访人员登记',
        component: () =>
          import ('@/views/visitorinfo/add'),
        meta: {title: '来访人员登记', icon: 'lfdj'}
      },
    {
      path: 'list',
      name: '来访人员列表',
      component: () =>
        import ('@/views/visitorinfo/list'),
      meta: {title: '来访人员列表', icon: 'lflb'}
    }
    
    ]
  },



  // {
  //   path: '/StaffInfo',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: '管理员信息管理',
  //   meta: {title: '管理员息管理', icon: 'adminst'},
  //   children: [{
  //     path: 'list',
  //     name: '管理员息列表',
  //     component: () =>
  //       import ('@/views/StaffInfo/list'),
  //     meta: {title: '管理员信息列表', icon: 'adminst'}
  //   },
  //     {
  //       path: 'add',
  //       name: '管理员信息添加',
  //       component: () =>
  //         import ('@/views/StaffInfo/add'),
  //       meta: {title: '管理员信息添加', icon: 'adminadd'}
  //     },
  //     {
  //       path: 'edit/:id',
  //       name: '管理员信息修改',
  //       component: () => import('@/views/StaffInfo/add'),
  //       meta: {title: '管理员信息修改', noCache: true},
  //       hidden: true
  //     }
  //   ]
  // },
  
  // {
  //   path: '/DormInfo',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: '宿舍信息管理',
  //   meta: {title: '宿舍信息管理', icon: 'dromadd'},
  //   children: [{
  //     path: 'list',
  //     name: '宿舍信息列表',
  //     component: () =>
  //       import ('@/views/DormInfo/list'),
  //     meta: {title: '宿舍信息列表', icon: 'dromadd'}
  //   },
  //     {
  //       path: 'add',
  //       name: '宿舍信息添加',
  //       component: () =>
  //         import ('@/views/DormInfo/add'),
  //       meta: {title: '宿舍信息添加', icon: 'dromaddd'}
  //     },
  //     {
  //       path: 'edit/:id',
  //       name: '宿舍信息修改',
  //       component: () => import('@/views/DormInfo/add'),
  //       meta: {title: '宿舍信息修改', noCache: true},
  //       hidden: true
  //     }
    // ]
  // },

  

  // {
  //   path: '/cmn',
  //   component: Layout,
  //   redirect: '/cmn/list',
  //   name: '数据管理',
  //   alwaysShow: true,
  //   meta: {title: '数据管理', icon: 'example'},
  //   children: [{
  //     path: 'list',
  //     name: '数据字典',
  //     component: () =>
  //       import ('@/views/dict/list'),
  //     meta: {title: '数据字典', icon: 'table'}
  //   }]
  // },
  
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  mode: 'hash', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
