(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-109e"],{"F+rB":function(t,e,a){"use strict";var s=a("UetX");a.n(s).a},UetX:function(t,e,a){},lAbF:function(t,e,a){"use strict";a.r(e);var s=a("QbLZ"),n=a.n(s),i=a("L2JU"),o=a("t3Un"),l={name:"Dashboard",computed:n()({},Object(i.b)(["name","roles"])),data:function(){return{stainfo:{}}},created:function(){this.findAllByStaId(this.$store.getters.name)},methods:{findAllByStaId:function(t){var e=this;return Object(o.a)({url:"/staff/Main/findAllByStaId/"+t,method:"get"}).then(function(t){e.stainfo=t.data[0]})},updateById:function(){var t=this;return Object(o.a)({url:"/staff/Main/updateById",method:"post",data:this.stainfo}).then(function(e){t.$message({type:"success",message:"修改成功!"})})}}},r=(a("F+rB"),a("KHd+")),d=Object(r.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"dashboard-text"},[t._v("当前用户:"+t._s(t.name))]),t._v(" "),a("div",{staticClass:"dashboard-text",staticStyle:{display:"none"}},[t._v("roles:"),t._l(t.roles,function(e,s){return a("span",{key:s},[t._v(t._s(e))])})],2),t._v(" "),a("el-form",{staticStyle:{"margin-top":"30px"},attrs:{"label-position":"left","label-width":"85px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:t.stainfo.staName,callback:function(e){t.$set(t.stainfo,"staName",e)},expression:"stainfo.staName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.stainfo.staSex,callback:function(e){t.$set(t.stainfo,"staSex",e)},expression:"stainfo.staSex"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.stainfo.staAge,callback:function(e){t.$set(t.stainfo,"staAge",e)},expression:"stainfo.staAge"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"管理宿舍号"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:t.stainfo.dormId,callback:function(e){t.$set(t.stainfo,"dormId",e)},expression:"stainfo.dormId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.stainfo.staPhone,callback:function(e){t.$set(t.stainfo,"staPhone",e)},expression:"stainfo.staPhone"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.updateById()}}},[t._v("保存")])],1)],1)],1)},[],!1,null,"4bcf9617",null);d.options.__file="index.vue";e.default=d.exports}}]);