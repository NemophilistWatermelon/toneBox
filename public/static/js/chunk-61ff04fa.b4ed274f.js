(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61ff04fa"],{"0d16":function(t,e,n){},"16d8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.id}})},o=[],a=n("5530"),s=(n("b680"),n("a7be"),n("44f8"),n("a6e0"),n("547e")),r=n.n(s),l={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]},c={name:"MarkdownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return l}},mode:{type:String,default:"markdown"},height:{type:String,required:!1,default:"300px"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=Object.assign({},l,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new r.a(Object(a["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",(function(){t.$emit("input",t.editor.getValue())}))},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},u=c,d=n("2877"),p=Object(d["a"])(u,i,o,!1,null,null,null);e["a"]=p.exports},"297a":function(t,e,n){"use strict";n("dded")},"3d00":function(t,e,n){},7339:function(t,e,n){"use strict";n("b1c0")},"7d4e":function(t,e,n){},"809e":function(t,e,n){"use strict";n("3d00")},"8d89":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"liu-yan-guan-li"},[n("div",{staticClass:"top-control"},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.onSendNews}},[t._v("发布")])],1),n("SendDialog",{attrs:{control:t.control},on:{fetch:t.fetchTable}}),n("EditDialog",{attrs:{control:t.control},on:{fetch:t.fetchTable},model:{value:t.editForm,callback:function(e){t.editForm=e},expression:"editForm"}}),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"新闻主图",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:"/uploads/"+t.row.imgurl,"preview-src-list":["/uploads/"+t.row.imgurl],fit:"cover"}})]}}])}),n("el-table-column",{attrs:{label:"新闻标题",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.topic))])]}}])}),n("el-table-column",{attrs:{label:"新闻简述",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.topicDes))])]}}])}),n("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"新闻主体内容",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.newscontent))])]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.edit(e.$index,e.row)}}},[t._v("修改")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.deleteMsg(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":t.requestBody.page,"page-sizes":[10,50,100],"page-size":t.requestBody.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.responseData.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},o=[],a=n("1da1"),s=(n("96cf"),n("5530")),r=n("b775");function l(t){return Object(r["a"])({url:"/news/list",method:"post",data:Object(s["a"])({},t)})}function c(t){return Object(r["a"])({url:"/news/delete",method:"post",data:Object(s["a"])({},t)})}function u(t){return Object(r["a"])({url:"/news/send",method:"post",headers:{"content-type":"multipart/form-data"},data:t})}function d(t){return Object(r["a"])({url:"/news/detail",method:"post",data:Object(s["a"])({},t)})}function p(t){return Object(r["a"])({url:"/news/updateNoFile",method:"post",data:Object(s["a"])({},t)})}function f(t){return Object(r["a"])({url:"/news/update",method:"post",headers:{"content-type":"multipart/form-data"},data:t})}var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:"发布新闻",visible:t.control.submit,width:"50%"},on:{"update:visible":function(e){return t.$set(t.control,"submit",e)}}},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"title"},[t._v(" 新闻标题: ")]),n("el-input",{model:{value:t.form.topic,callback:function(e){t.$set(t.form,"topic",e)},expression:"form.topic"}})],1),n("div",{staticClass:"form-group"},[n("div",{staticClass:"title"},[t._v(" 新闻简述: ")]),n("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.form.topicDes,callback:function(e){t.$set(t.form,"topicDes",e)},expression:"form.topicDes"}})],1),n("div",{staticClass:"form-group"},[n("div",{staticClass:"title"},[t._v(" 主图: ")]),n("el-upload",{ref:"upload",attrs:{action:"fakeaction",limit:1,"on-exceed":t.onExceed,"list-type":"picture-card","before-upload":t.onBeforeUpload,"http-request":t.onHttpRequest},scopedSlots:t._u([{key:"file",fn:function(e){var i=e.file;return n("div",{},[n("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:i.url,alt:""}}),n("span",{staticClass:"el-upload-list__item-actions"},[n("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(i)}}},[n("i",{staticClass:"el-icon-zoom-in"})]),t.disabled?t._e():n("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.handleRemove(i)}}},[n("i",{staticClass:"el-icon-delete"})])])])}}])},[n("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1),n("div",{staticClass:"form-group"},[n("div",{staticClass:"title"},[t._v(" 内容编辑: ")]),n("markdown-editor",{ref:"MarkdownEditor",attrs:{height:"300px"},model:{value:t.form.newscontent,callback:function(e){t.$set(t.form,"newscontent",e)},expression:"form.newscontent"}})],1),n("div",{staticClass:"form-group",staticStyle:{"text-align":"center"}},[n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.control.submit=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.onSendNewsAction}},[t._v("确 定")])],1)])])},g=[],h=n("16d8"),v=n("a888"),w=new FormData,b={name:"EditDialog",directives:{elDragDialog:v["a"]},components:{MarkdownEditor:h["a"]},props:{control:{type:Object}},data:function(){return{form:{},disabled:!1}},methods:{onSendNewsAction:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,w.append("newscontent",t.form.newscontent),w.append("markdown",t.$refs.MarkdownEditor.getHtml()),w.append("topic",t.form.topic),w.append("topicDes",t.form.topicDes),console.log(w),e.next=8,u(w);case 8:n=e.sent,"success"===n.status&&(t.$message.success("发布成功"),t.initForm()),console.log({"上传结果":n}),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),t.$message.error("发布失败:"+e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},onBeforeUpload:function(t){var e="image/jpeg"===t.type,n=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),n||this.$message.error("上传图片大小不能超过 2MB!"),e&&n},onExceed:function(){this.$message.warning("请先删除已选择上传图片")},handleRemove:function(t){var e=this;console.log(t,{upload:this.$refs.upload}),this.$nextTick((function(t){e.$refs.upload.fileList=[],e.$forceUpdate(),w.set("imgUrl","")}))},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},onHttpRequest:function(t){w.append("imgUrl",t.file)},initForm:function(){w=new FormData,this.$refs.upload.clearFiles(),this.$set(this,"form",{}),this.control.submit=!1,this.$emit("fetch")}}},y=b,x=(n("c19b"),n("809e"),n("2877")),k=Object(x["a"])(y,m,g,!1,null,"7220f164",null),$=k.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:"新闻编辑",visible:t.control.edit,width:"50%"},on:{"update:visible":function(e){return t.$set(t.control,"edit",e)}}},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"title"},[t._v(" 新闻标题: ")]),n("el-input",{model:{value:t.value.topic,callback:function(e){t.$set(t.value,"topic",e)},expression:"value.topic"}})],1),n("div",{staticClass:"form-group"},[n("div",{staticClass:"title"},[t._v(" 新闻简述: ")]),n("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.value.topicDes,callback:function(e){t.$set(t.value,"topicDes",e)},expression:"value.topicDes"}})],1),n("div",{staticClass:"form-group"},[n("div",{staticClass:"title"},[t._v(" 主图: ")]),t.value.imgurl?n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:"/uploads/"+t.value.imgurl,"preview-src-list":["/uploads/"+t.value.imgurl],fit:"cover"}}):n("el-empty",{attrs:{"image-size":40}}),n("el-upload",{ref:"upload",attrs:{action:"fakeaction",limit:1,"on-exceed":t.onExceed,"list-type":"picture-card","before-upload":t.onBeforeUpload,"http-request":t.onHttpRequest},scopedSlots:t._u([{key:"file",fn:function(e){var i=e.file;return n("div",{},[n("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:i.url,alt:""}}),n("span",{staticClass:"el-upload-list__item-actions"},[n("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(i)}}},[n("i",{staticClass:"el-icon-zoom-in"})]),t.disabled?t._e():n("span",{staticClass:"el-upload-list__item-delete",on:{click:function(e){return t.handleRemove(i)}}},[n("i",{staticClass:"el-icon-delete"})])])])}}])},[n("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1),n("div",{staticClass:"form-group"},[n("div",{staticClass:"title"},[t._v(" 内容编辑: ")]),n("markdown-editor",{ref:"MarkdownEditor",attrs:{height:"300px"},model:{value:t.value.newscontent,callback:function(e){t.$set(t.value,"newscontent",e)},expression:"value.newscontent"}})],1),n("div",{staticClass:"form-group",staticStyle:{"text-align":"center"}},[n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.control.edit=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.onSendNewsAction}},[t._v("确 定")])],1)])])},C=[],S=new FormData,D={name:"EditDialog",directives:{elDragDialog:v["a"]},components:{MarkdownEditor:h["a"]},props:{value:{type:Object,required:!0},control:{type:Object}},data:function(){return{form:{},disabled:!1}},methods:{onSendNewsAction:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,S.append("newscontent",t.value.newscontent),S.append("markdown",t.$refs.MarkdownEditor.getHtml()),S.append("topic",t.value.topic),S.append("topicDes",t.value.topicDes),S.append("id",t.value.id),!S.get("imgUrl")){e.next=12;break}return e.next=9,f(S);case 9:n=e.sent,e.next=16;break;case 12:return t.$set(t.value,"markdown",t.$refs.MarkdownEditor.getHtml()),e.next=15,p(t.value);case 15:n=e.sent;case 16:"success"===n.status&&(t.$message.success("修改成功"),t.initForm()),console.log({"上传结果":n}),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](0),t.$message.error("发布失败:"+e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))()},onBeforeUpload:function(t){var e="image/jpeg"===t.type,n=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),n||this.$message.error("上传图片大小不能超过 2MB!"),e&&n},onExceed:function(){this.$message.warning("请先删除已选择上传图片")},handleRemove:function(t){var e=this;console.log(t,{upload:this.$refs.upload}),this.$nextTick((function(t){e.$refs.upload.fileList=[],e.$forceUpdate(),S.set("imgUrl","")}))},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},onHttpRequest:function(t){S.append("imgUrl",t.file)},initForm:function(){S=new FormData,this.$refs.upload.clearFiles(),this.$set(this,"form",{}),this.control.edit=!1,this.$emit("fetch")}}},j=D,E=(n("297a"),n("b8bf"),Object(x["a"])(j,_,C,!1,null,"7d5aeda0",null)),O=E.exports,R={name:"LiuYanGuanLi",components:{SendDialog:$,EditDialog:O},data:function(){return{control:{submit:!1,edit:!1},editForm:{},dialogVisible:!1,tableData:[],requestBody:{page:1,pageSize:10,name:""},responseData:{total:100}}},created:function(){this.fetchTable()},methods:{onSendNews:function(){this.control.submit=!0},edit:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var o,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n.$set(n.control,"edit",!0),i.prev=1,o={id:e.id},console.log(t),i.next=6,d(o);case 6:a=i.sent,console.log({"获取详情详细结果":a}),n.$set(n,"editForm",null===a||void 0===a?void 0:a.data[0]),i.next=14;break;case 11:i.prev=11,i.t0=i["catch"](1),n.$message.error("获取详情失败"+i.t0);case 14:console.log({row:t,index:e});case 15:case"end":return i.stop()}}),i,null,[[1,11]])})))()},deleteMsgAction:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,i={id:e.id},t.next=4,c(i);case 4:o=t.sent,console.log({"删除":o}),n.$message.success("删除成功"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),n.$message.warning("删除数据失败",t.t0);case 12:return t.prev=12,n.fetchTable(),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},deleteMsg:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:n.$confirm("此操作将永久该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.deleteMsgAction(t,e)})).catch((function(){n.$message({type:"info",message:"已取消删除"})}));case 1:case"end":return i.stop()}}),i)})))()},fetchTable:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.requestBody,e.next=4,l(n);case 4:i=e.sent,console.log({result:i}),t.$message.success("数据获取成功"),t.$set(t,"tableData",i.data),t.$set(t.responseData,"total",i.total),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0),t.$message.warning("获取数据失败",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},handleDelete:function(t,e){console.log(t,e)},handleSizeChange:function(t){this.$set(this.requestBody,"pageSize",t),this.fetchTable(),console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){this.$set(this.requestBody,"page",t),this.fetchTable(),console.log("当前页: ".concat(t))}}},q=R,T=(n("7339"),Object(x["a"])(q,i,o,!1,null,"a8670026",null));e["default"]=T.exports},a888:function(t,e,n){"use strict";n("caad"),n("2532"),n("ac1f"),n("5319"),n("99af");var i={bind:function(t,e,n){var i=t.querySelector(".el-dialog__header"),o=t.querySelector(".el-dialog");console.log({drag:o}),i.style.cssText+=";cursor:move;",o.style.cssText+=";top:0px;";var a=function(){return window.document.currentStyle?function(t,e){return t.currentStyle[e]}:function(t,e){return getComputedStyle(t,!1)[e]}}();i.onmousedown=function(t){var e=t.clientX-i.offsetLeft,s=t.clientY-i.offsetTop,r=o.offsetWidth,l=o.offsetHeight,c=document.body.clientWidth,u=document.body.clientHeight,d=o.offsetLeft,p=c-o.offsetLeft-r,f=o.offsetTop,m=u-o.offsetTop-l,g=a(o,"left"),h=a(o,"top");g.includes("%")?(g=+document.body.clientWidth*(+g.replace(/\%/g,"")/100),h=+document.body.clientHeight*(+h.replace(/\%/g,"")/100)):(g=+g.replace(/\px/g,""),h=+h.replace(/\px/g,"")),document.onmousemove=function(t){var i=t.clientX-e,a=t.clientY-s;-i>d?i=-d:i>p&&(i=p),-a>f?a=-f:a>m&&(a=m),o.style.cssText+=";left:".concat(i+g,"px;top:").concat(a+h,"px;"),n.child.$emit("dragDialog")},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}},o=function(t){t.directive("el-drag-dialog",i)};window.Vue&&(window["el-drag-dialog"]=i,Vue.use(o)),i.install=o;e["a"]=i},b1c0:function(t,e,n){},b8bf:function(t,e,n){"use strict";n("7d4e")},c19b:function(t,e,n){"use strict";n("0d16")},dded:function(t,e,n){}}]);