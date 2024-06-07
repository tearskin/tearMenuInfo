webpackJsonp([5],{"6K6S":function(t,e){},Phxg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Fdeo"),a=i.n(n),s=i("bQ0r"),r=i.n(s),o=i("wzVF"),l=i("Zz1P"),c=i.n(l),d={name:"web-config-friends",components:{},mixins:[i("a9+M").a],data:function(){return{friendsList:[],page:0,pageSize:15,currentPage:0,total:0,dialogFormVisible:!1,typeList:[],typeValue:"",tip:"新增",friend:{}}},created:function(){this.page=0,this.getList()},methods:r()({},Object(o.b)(["getFriendsList","deleteFriend","getFriendTypeList","addFriend","modifyFriend"]),{formatTime:function(t,e,i,n){return i?c()(1e3*parseInt(i)).format("YYYY-MM-DD HH:mm"):"-"},formatStatus:function(t){return"0"==t?"已发布":"已删除"},edit:function(t){this.tip="编辑",this.getTypeList(),this.friend=JSON.parse(a()(t)),this.typeValue=t.typeName,this.dialogFormVisible=!0},under:function(t){var e=this;this.showDialog("此操作会将该友链标删除，不能恢复, 是否继续?",function(){e.deleteFriend(t.friendId).then(function(t){e.$toast("已删除"),e.page=0,e.getList()}).catch(function(t){e.$toast(t.msg,"error")})})},pageChange:function(t){this.scrollToTarget(0,!1),this.page=t-1,this.currentPage=t,this.getList()},getList:function(){var t=this;this.getFriendsList({page:this.page,pageSize:this.pageSize}).then(function(e){t.total=e.count,t.friendsList=e.list}).catch(function(){t.friendsList=[]})},getTypeList:function(){var t=this;this.getFriendTypeList().then(function(e){t.typeList=e}).catch(function(){t.typeList=[]})},showDialog:function(t,e){var i=this;this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){e()}).catch(function(){i.friend={},i.typeValue=""})},commit:function(){var t=this;if(this.friend.name)if(this.friend.url)if(this.typeValue){var e={name:this.friend.name,url:this.friend.url},i=this.typeList.find(function(e){return e.name===t.typeValue});i?e.typeId=i.id:e.typeName=this.typeValue,this.friend.friendId?(e.friendId=this.friend.friendId,this.modifyFriend(e).then(function(e){t.$toast("已修改"),t.page=0,t.getList(),t.dialogFormVisible=!1}).catch(function(e){t.$toast(e.msg,"error")})):this.addFriend(e).then(function(e){t.$toast("已添加"),t.page=0,t.getList(),t.dialogFormVisible=!1}).catch(function(e){t.$toast(e.msg,"error")})}else this.$toast("请选择友链类型","error");else this.$toast("请输入友链链接","error");else this.$toast("请输入友链名称","error")},add:function(){this.tip="新增",this.getTypeList(),this.friend={},this.typeValue="",this.dialogFormVisible=!0}})},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"web-config-friends"}},[i("div",{staticClass:"header-wrap"},[t._v("\n    友链管理（共计："+t._s(t.total)+"条）\n    "),i("div",{staticClass:"action-btn-wrap"},[i("span",{on:{click:t.add}},[t._v("新增")])])]),t._v(" "),i("div",{staticClass:"friends-table-wrap"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.friendsList,border:"",stripe:"",size:"mini"}},[i("el-table-column",{attrs:{label:"标题","show-overflow-tooltip":"","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("a",{staticClass:"friends-title",attrs:{href:e.row.url,target:"_blank"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"typeName",label:"分类","show-overflow-tooltip":"",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"128",formatter:t.formatTime}}),t._v(" "),i("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"128",formatter:t.formatTime}}),t._v(" "),i("el-table-column",{attrs:{prop:"status",label:"状态",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:"0"==e.row.status?"success":"danger",size:"mini"}},[t._v("\n            "+t._s(t.formatStatus(e.row.status))+"\n          ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"112"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",icon:"el-icon-edit",type:"primary",circle:""},on:{click:function(i){t.edit(e.row)}}}),t._v(" "),"1"!=e.row.status?i("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(i){t.under(e.row)}}}):t._e()]}}])})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.friendsList.length>0,expression:"friendsList.length > 0"}],staticClass:"pagination"},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,"current-page":t.currentPage,total:t.total},on:{"current-change":t.pageChange}})],1)],1),t._v(" "),i("el-dialog",{staticClass:"edit-dialog",attrs:{title:t.tip,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-input",{staticClass:"input-title",attrs:{size:"mini",placeholder:"请输入友链名称"},model:{value:t.friend.name,callback:function(e){t.$set(t.friend,"name",e)},expression:"friend.name"}}),t._v(" "),i("el-input",{staticClass:"input-title",attrs:{size:"mini",placeholder:"请输入友链链接"},model:{value:t.friend.url,callback:function(e){t.$set(t.friend,"url",e)},expression:"friend.url"}}),t._v(" "),i("div",{staticClass:"label-wrap"},[t._v("\n      分类：\n      "),i("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",size:"mini",placeholder:"请选择文章分类"},model:{value:t.typeValue,callback:function(e){t.typeValue=e},expression:"typeValue"}},t._l(t.typeList,function(t){return i("el-option",{key:t.id,attrs:{size:"mini",label:t.name,value:t.name}})}),1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.commit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var f=i("2Rgo")(d,u,!1,function(t){i("6K6S"),i("lOkG")},"data-v-b20d09f8",null);e.default=f.exports},lOkG:function(t,e){}});