(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-78e9"],{H30N:function(t,e,n){"use strict";n.r(e);var a=n("tdoh"),l={data:function(){return{current:1,limit:11,searchObj:{},list:[],total:0}},created:function(){this.getList()},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.current=e,a.a.findEnterSchool(this.current,this.limit,this.searchObj).then(function(e){console.log(e),t.list=e.data.records,t.total=e.data.total}).catch(function(t){console.log(t)})}}},r=n("KHd+"),o=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"学号"},model:{value:t.searchObj.stuId,callback:function(e){t.$set(t.searchObj,"stuId",e)},expression:"searchObj.stuId"}})],1),t._v(" "),n("el-form-item",[n("el-input",{attrs:{placeholder:"姓名"},model:{value:t.searchObj.stuName,callback:function(e){t.$set(t.searchObj,"stuName",e)},expression:"searchObj.stuName"}})],1),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){t.getList()}}},[t._v("查询\n    ")])],1),t._v(" "),n("el-table",{staticStyle:{width:"100%","font-size":"15px"},attrs:{data:t.list,border:""}},[n("el-table-column",{attrs:{type:"selection"}}),t._v(" "),n("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),t._v(" "),n("el-table-column",{attrs:{prop:"inregisterId",label:"编号"}}),t._v(" "),n("el-table-column",{attrs:{prop:"stuId",label:"学号"}}),t._v(" "),n("el-table-column",{attrs:{prop:"stuName",label:"姓名"}}),t._v(" "),n("el-table-column",{attrs:{prop:"inregisterTime",label:"离校时间"}}),t._v(" "),n("el-table-column",{attrs:{prop:"updateTime",label:"入校时间"}})],1),t._v(" "),n("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":t.current,"page-size":t.limit,total:t.total,layout:"total, prev, pager, next, jumper"},on:{"current-change":t.getList}})],1)},[],!1,null,null,null);o.options.__file="inregisterYes.vue";e.default=o.exports},tdoh:function(t,e,n){"use strict";var a=n("t3Un");e.a={findLeaveSchool:function(t,e,n){return Object(a.a)({url:"/staff/InregisterInfo/findLeaveSchool/"+t+"/"+e,method:"post",data:n})},findEnterSchool:function(t,e,n){return Object(a.a)({url:"/staff/InregisterInfo/findEnterSchool/"+t+"/"+e,method:"post",data:n})},LeaveSchool:function(t){return Object(a.a)({url:"/staff/InregisterInfo/LeaveSchool/"+t,method:"put"})},enterSchool:function(t){return Object(a.a)({url:"/staff/InregisterInfo/enterSchool/"+t,method:"put"})}}}}]);