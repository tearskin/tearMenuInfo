webpackJsonp([7],{G64x:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("bQ0r"),o=i.n(n),s=i("wzVF"),a=i("Zz1P"),l=i.n(a),r=i("a9+M"),c=i("Ubzt"),m={name:"comments-manage",components:{},mixins:[r.a,c.a],data:function(){return{placeholder:"",commentsList:[],dialogFormVisible:!1,showEmoji:!1,replyContent:"",page:0,pageSize:15,currentPage:0,total:0,comments:{}}},created:function(){this.page=0,this.getList()},methods:o()({},Object(s.b)(["getAllCommentsList","adminReplyComments","deleteComments"]),{formatTime:function(t,e,i,n){return i?l()(1e3*parseInt(i)).format("YYYY-MM-DD HH:mm"):"-"},reply:function(t){this.comments=t,this.replyContent="",this.placeholder="@"+this.comments.name+" ",this.dialogFormVisible=!0},del:function(t){var e=this;this.showDialog("此操作将彻底删除该评论，不可恢复, 是否继续?",function(){e.deleteComments(t.id).then(function(t){e.$toast("已删除"),e.page=0,e.getList()}).catch(function(t){e.$toast(t.msg,"error")})})},pageChange:function(t){this.scrollToTarget(0,!1),this.page=t-1,this.currentPage=t,this.getList()},getList:function(){var t=this;this.getAllCommentsList({page:this.page,pageSize:this.pageSize}).then(function(e){t.total=e.count,t.commentsList=e.list}).catch(function(){t.total=0,t.commentsList=[]})},preview:function(t){this.$router.push({name:"articlePreview",query:{id:t.articleId}})},choseEmoji:function(t){this.replyContent+=t},commit:function(){var t=this;if(""!==this.replyContent){var e={articleId:this.comments.articleId,replyId:this.comments.id,content:this.analyzeEmoji("@"+this.comments.name+" "+this.replyContent),sourceContent:"@"+this.comments.name+" "+this.replyContent};this.adminReplyComments(e).then(function(e){t.$toast("回复成功~"),t.page=0,t.getList(),t.dialogFormVisible=!1}).catch(function(e){t.$toast(e.msg,"error")})}else this.$toast("回复内容不能为空","error")},cancel:function(){this.dialogFormVisible=!1},showDialog:function(t,e){this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){e()}).catch(function(){})}})},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"comments-manage"}},[i("p",[t._v("评论（共计："+t._s(t.total)+"条）")]),t._v(" "),i("div",{staticClass:"comments-table-wrap"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.commentsList,border:"",stripe:"",size:"mini"}},[i("el-table-column",{attrs:{prop:"name",label:"评论者",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"评论内容","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(JSON.parse(e.row.content),function(e,n){return i("span",{key:n},[t._v("\n            "+t._s("text"===e.type?e.content:"")+"\n            "),"emoji"===e.type?i("img",{staticClass:"content-emoji",attrs:{src:e.content,alt:""}}):t._e()])})}}])}),t._v(" "),i("el-table-column",{attrs:{label:"文章","show-overflow-tooltip":"","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"comments-title",on:{click:function(i){t.preview(e.row)}}},[t._v(t._s(e.row.articleTitle))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"作者",width:"45"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s("1"===e.row.isAuthor?"是":"否")+"\n        ")]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"ip",label:"ip",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"128",formatter:t.formatTime}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"112"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.isAuthor?i("el-button",{attrs:{size:"mini",icon:"el-icon-edit-outline",type:"primary",circle:""},on:{click:function(i){t.reply(e.row)}}}):t._e(),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(i){t.del(e.row)}}})]}}])})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],staticClass:"pagination"},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,"current-page":t.currentPage,total:t.total},on:{"current-change":t.pageChange}})],1)],1),t._v(" "),i("el-dialog",{staticClass:"edit-dialog",attrs:{title:"回复",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-input",{staticClass:"input-title",attrs:{size:"mini",type:"textarea",rows:5,resize:"none",placeholder:t.placeholder},model:{value:t.replyContent,callback:function(e){t.replyContent=e},expression:"replyContent"}}),t._v(" "),i("div",{staticClass:"btn-wrap"},[i("span",{staticClass:"emoji-btn",class:{active:t.showEmoji},on:{click:function(e){t.showEmoji=!t.showEmoji}}},[t._v("表情")])]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.showEmoji,expression:"showEmoji"}],staticClass:"emoji-wrap"},t._l(t.emojiList,function(e,n){return i("li",{key:n,staticClass:"emoji-item",attrs:{title:e.title},on:{click:function(i){t.choseEmoji(e.title)}}},[i("img",{attrs:{src:"/static/emoji/"+e.name,alt:""}})])}),0),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.commit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var p=i("2Rgo")(m,u,!1,function(t){i("prLs"),i("iTKL")},"data-v-1a6727df",null);e.default=p.exports},iTKL:function(t,e){},prLs:function(t,e){}});