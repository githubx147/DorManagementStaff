(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3881"],{FkZh:function(t,e,i){"use strict";var a=i("t3Un");e.a={findVisitorInfo:function(t,e,i){return Object(a.a)({url:"/staff/VisitorInfo/findVisitorInfo/"+t+"/"+e,method:"post",data:i})},addVisitorInfo:function(t){return Object(a.a)({url:"/staff/VisitorInfo/addVisitorInfo",method:"post",data:t})}}},ddWx:function(t,e,i){"use strict";i.r(e);var a=i("FkZh"),o={data:function(){return{current:1,limit:8,searchObj:{},list:[],total:0}},created:function(){this.getList()},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.current=e,a.a.findVisitorInfo(this.current,this.limit,this.searchObj).then(function(e){console.log(e),t.list=e.data.records,t.total=e.data.total}).catch(function(t){console.log(t)})}}},r=i("KHd+"),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[i("el-form-item",[i("el-input",{attrs:{placeholder:"访问房间号"},model:{value:t.searchObj.visitorDorm,callback:function(e){t.$set(t.searchObj,"visitorDorm",e)},expression:"searchObj.visitorDorm"}})],1),t._v(" "),i("el-form-item",[i("el-input",{attrs:{placeholder:"被访问人员姓名"},model:{value:t.searchObj.visitorForName,callback:function(e){t.$set(t.searchObj,"visitorForName",e)},expression:"searchObj.visitorForName"}})],1),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){t.getList()}}},[t._v("查询\n    ")])],1),t._v(" "),i("el-table",{staticStyle:{width:"100%","font-size":"15px"},attrs:{data:t.list,border:""}},[i("el-table-column",{attrs:{type:"selection"}}),t._v(" "),i("el-table-column",{attrs:{type:"index",label:"序号",width:"55"}}),t._v(" "),i("el-table-column",{attrs:{prop:"visitorName",label:"访客姓名",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"visitorSex",label:"性别"}}),t._v(" "),i("el-table-column",{attrs:{prop:"visitorDorm",label:"访问房间号"}}),t._v(" "),i("el-table-column",{attrs:{prop:"visitorStuID",label:"访问学生学号"}}),t._v(" "),i("el-table-column",{attrs:{prop:"visitorForName",label:"被访问人员姓名"}}),t._v(" "),i("el-table-column",{attrs:{prop:"createTime",label:"访问时间"}})],1),t._v(" "),i("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":t.current,"page-size":t.limit,total:t.total,layout:"total, prev, pager, next, jumper"},on:{"current-change":t.getList}})],1)},[],!1,null,null,null);l.options.__file="list.vue";e.default=l.exports}}]);