(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-19ef"],{"9Bp8":function(t,i,o){"use strict";o.r(i);var e=o("FkZh"),s={data:function(){return{visitorinfo:{}}},created:function(){},methods:{save:function(){var t=this;e.a.addVisitorInfo(this.visitorinfo).then(function(i){t.$message({type:"success",message:"添加成功!"}),t.$router.push({path:"/visitorinfo/list"})})}}},n=o("KHd+"),r=Object(n.a)(s,function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"app-container",staticStyle:{"font-size":"15px"}},[o("el-form",{attrs:{"label-width":"120px"}},[o("el-form-item",{attrs:{label:"姓名"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:t.visitorinfo.visitorName,callback:function(i){t.$set(t.visitorinfo,"visitorName",i)},expression:"visitorinfo.visitorName"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"性别"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:t.visitorinfo.visitorSex,callback:function(i){t.$set(t.visitorinfo,"visitorSex",i)},expression:"visitorinfo.visitorSex"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"被访问人员学号"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:t.visitorinfo.visitorStuID,callback:function(i){t.$set(t.visitorinfo,"visitorStuID",i)},expression:"visitorinfo.visitorStuID"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(i){t.save()}}},[t._v("保存")])],1)],1)],1)},[],!1,null,null,null);r.options.__file="add.vue";i.default=r.exports},FkZh:function(t,i,o){"use strict";var e=o("t3Un");i.a={findVisitorInfo:function(t,i,o){return Object(e.a)({url:"/staff/VisitorInfo/findVisitorInfo/"+t+"/"+i,method:"post",data:o})},addVisitorInfo:function(t){return Object(e.a)({url:"/staff/VisitorInfo/addVisitorInfo",method:"post",data:t})}}}}]);