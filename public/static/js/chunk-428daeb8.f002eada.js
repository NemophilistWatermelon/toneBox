(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-428daeb8"],{7210:function(e,t,n){"use strict";n("9d96")},"8bc8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"liu-yan-guan-li"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.name))])]}}])}),n("el-table-column",{attrs:{label:"邮箱",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.email))])]}}])}),n("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"留言内容",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.content))])]}}])}),n("el-table-column",{attrs:{label:"电话",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v("姓名: "+e._s(t.row.name))]),n("p",[e._v("电话: "+e._s(t.row.phone))]),n("p",[e._v("留言内容: "+e._s(t.row.content))]),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.name))])],1)])]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.deleteMsg(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.requestBody.page,"page-sizes":[10,50,100],"page-size":e.requestBody.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.responseData.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},s=[],r=n("1da1"),o=(n("96cf"),n("5530")),c=n("b775");function l(e){return Object(c["a"])({url:"/msg/list",method:"post",data:Object(o["a"])({},e)})}function i(e){return Object(c["a"])({url:"/msg/delete",method:"post",data:Object(o["a"])({},e)})}var u={name:"LiuYanGuanLi",data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",content:"232323233232323233232323233232323233232323233"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",content:"你好!"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],requestBody:{page:1,pageSize:10,name:""},responseData:{total:100}}},created:function(){this.fetchTable()},methods:{deleteMsgAction:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a={id:t.id},e.next=4,i(a);case 4:s=e.sent,console.log({"删除":s}),n.$message.success("删除成功"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),n.$message.warning("删除数据失败",e.t0);case 12:return e.prev=12,n.fetchTable(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},deleteMsg:function(e,t){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.$confirm("此操作将永久该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.deleteMsgAction(e,t)})).catch((function(){n.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return a.stop()}}),a)})))()},fetchTable:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e.requestBody,t.next=4,l(n);case 4:a=t.sent,console.log({result:a}),e.$message.success("数据获取成功"),e.$set(e,"tableData",a.data),e.$set(e.responseData,"total",a.total),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0),e.$message.warning("获取数据失败",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},handleDelete:function(e,t){console.log(e,t)},handleSizeChange:function(e){this.$set(this.requestBody,"pageSize",e),this.fetchTable(),console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){this.$set(this.requestBody,"page",e),this.fetchTable(),console.log("当前页: ".concat(e))}}},d=u,p=(n("7210"),n("2877")),f=Object(p["a"])(d,a,s,!1,null,"31dcfa14",null);t["default"]=f.exports},"9d96":function(e,t,n){}}]);