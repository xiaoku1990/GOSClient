webpackJsonp([15],{"4lg9":function(t,e,a){"use strict";(function(t){var i=a("fjIZ"),l=a("TgUw"),o=a("CaOM");e.a={name:"hoursers",data:function(){return{userId:0,searchDialogVisible:!1,searchLoading:!1,searchFormData:{user_id:0,build_id:this.$BuildId,car_number:""},searchData:{car_id:0,car_number:"",car_type:""},whiteTableData:[],whiteTablePageTotal:1,whiteTableFormData:{user_id:0,build_id:this.$BuildId,list_type:"white",page:1},blackTableData:[],blackTablePageTotal:1,blackTableFormData:{user_id:0,build_id:this.$BuildId,list_type:"black",page:1},newDialogTitle:"",newDialogInfo:"",newLoading:!1,newblackWhiteDialogVisiable:!1,newFormData:{user_id:0,build_id:this.$BuildId,list_type:"",car_number:""},editDialogTitle:"",editLoading:!1,editDialogVisible:!1,editFormData:{user_id:0,build_id:this.$BuildId,list_type:"",car_id:0,car_number:""},deleteFormData:{user_id:0,build_id:this.$BuildId,list_type:"",car_number:"",car_id:""},blackExportLoading:!1,whiteExportLoading:!1,exportName:"",exportDateFormat:Object(o.a)().config.tableExportDateFormat,exportFiledArray:{sheetHeaderTitles:["编号","车牌号"],sheetHeaderFields:["car_id","car_number"]},exportFormData:{user_id:0,build_id:this.$BuildId,list_type:"",page:0}}},methods:{search:function(){var e=this;this.searchFormData.user_id=this.userId,this.searchLoading=!0,this.$http({method:"post",url:this.$Api+"/GOSSystem/queryBlackWhiteCar",data:t.stringify(this.searchFormData)}).then(function(t){e.searchLoading=!1,1===t.data.result?(e.searchData=t.data,e.searchDialogVisible=!0):e.$notify({title:"查询结果",message:t.data.msg,duration:2e3,type:"info"})}).catch(function(t){e.searchLoading=!1,e.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})},whiteTableUpdate:function(){var e=this;this.whiteTableFormData.user_id=this.userId,this.$http({method:"post",url:this.$Api+"/GOSSystem/getBlackWhiteList",data:t.stringify(this.whiteTableFormData)}).then(function(t){1===t.data.result&&(e.whiteTableData=t.data.white_list,e.whiteTablePageTotal=t.data.total_page)}).catch(function(t){e.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})},blackTableUpdate:function(){var e=this;this.blackTableFormData.user_id=this.userId,this.$http({method:"post",url:this.$Api+"/GOSSystem/getBlackWhiteList",data:t.stringify(this.blackTableFormData)}).then(function(t){1===t.data.result&&(e.blackTableData=t.data.black_list,e.blackTablePageTotal=t.data.total_page)}).catch(function(t){e.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})},whiteTablePageChange:function(t){this.whiteTableUpdate()},blackTablePageChange:function(t){this.blackTableUpdate()},newblackWhiteDialog:function(t){"black"==t?(this.newDialogTitle="添加黑名单",this.newDialogInfo="黑名单车辆进入车位会报警提示"):"white"==t&&(this.newDialogTitle="添加白名单",this.newDialogInfo="白名单车辆查询机隐私保护不可查询到"),this.newFormData.user_id=this.userId,this.newFormData.list_type=t,this.newFormData.car_number="",this.newblackWhiteDialogVisiable=!0},newblackWhiteClick:function(){var e=this;this.newFormData.car_number?(this.newLoading=!0,this.$http({method:"post",url:this.$Api+"/GOSSystem/addCarToBlackWhiteList",data:t.stringify(this.newFormData)}).then(function(t){e.newLoading=!1,1===t.data.result?(e.$notify({title:"成功",message:t.data.msg,duration:2e3,type:"success"}),e.newblackWhiteDialogVisiable=!1,"white"==e.newFormData.list_type?e.whiteTableUpdate():"black"==e.newFormData.list_type&&e.blackTableUpdate()):e.$notify({title:"添加失败",message:t.data.msg,duration:2e3,type:"error"})}).catch(function(t){e.newLoading=!1,e.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})):this.$message({title:"注意",message:"车配不能为空",duration:2e3,type:"warning"})},editDialog:function(t,e,a){a.cancelBubble=!0,"black"==t?this.editDialogTitle="编辑黑名单":"white"==t&&(this.editDialogTitle="编辑白名单"),this.editDialogVisible=!0,this.editFormData.user_id=this.userId,this.editFormData.car_id=e.car_id,this.editFormData.car_number=e.car_number,this.editFormData.list_type=t},editClick:function(){var e=this;this.editFormData.car_number?(this.editLoading=!0,this.$http({method:"post",url:this.$Api+"/GOSSystem/editCarInBlackWhiteList",data:t.stringify(this.editFormData)}).then(function(t){e.editLoading=!1,1===t.data.result?(e.$notify({title:"成功",message:t.data.msg,duration:2e3,type:"success"}),e.editDialogVisible=!1,e.searchDialogVisible=!1,"white"==e.editFormData.list_type?e.whiteTableUpdate():"black"==e.editFormData.list_type&&e.blackTableUpdate()):e.$notify({title:"编辑失败",message:t.data.msg,duration:2e3,type:"error"})}).catch(function(t){e.editLoading=!1,e.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})):this.$message({message:"车牌号不能为空",duration:2e3,type:"warning"})},blackWhiteDelete:function(e,a,i){var l=this;i.cancelBubble=!0,this.$confirm("此操作将永久删除该名单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l.deleteFormData.car_number=a.car_number,l.deleteFormData.car_id=a.car_id,l.deleteFormData.list_type=e,l.deleteFormData.user_id=l.userId,l.$http({method:"post",url:l.$Api+"/GOSSystem/deleteCarInBlackWhiteList",data:t.stringify(l.deleteFormData)}).then(function(t){1===t.data.result?(l.$notify({type:"success",title:"成功",message:t.data.msg,duration:2e3}),l.searchDialogVisible=!1,"white"==l.deleteFormData.list_type?l.whiteTableUpdate():"black"==l.deleteFormData.list_type&&l.blackTableUpdate()):l.$notify({type:"error",title:"删除失败",message:t.data.msg,duration:2e3})}).catch(function(t){l.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})}).catch(function(){})},blackWhiteExport:function(e){var a=this;this.exportFormData.user_id=this.userId,this.exportFormData.list_type=e,"black"==e?(this.exportName="黑名单导出_",this.blackExportLoading=!0):"white"==e&&(this.exportName="白名单导出_",this.whiteExportLoading=!0),this.$http({method:"post",url:this.$Api+"/GOSSystem/getBlackWhiteList",data:t.stringify(this.exportFormData)}).then(function(t){if(a.blackExportLoading=!1,a.whiteExportLoading=!1,200==t.status){var o=t.data;if(void 0!==o.result&&1==o.result){var r=[];"black"==e?r=o.black_list:"white"==e&&(r=o.white_list);var n=a.exportName+Object(i.a)(new Date,a.exportDateFormat);Object(l.a)(a,a.exportFiledArray.sheetHeaderTitles,a.exportFiledArray.sheetHeaderFields,r,n)}}else a.$message({message:"导出失败："+data.status,duration:2e3,type:"error"})}).catch(function(t){a.blackExportLoading=!1,a.whiteExportLoading=!1,a.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})}},mounted:function(){var t=this;localStorage.getItem("userInfo")?t.userId=JSON.parse(localStorage.getItem("userInfo")).user_id:console.log("[black-white]local storage 里面找不到登录信息userInfo"),eventbus.$on("onUserLogin",function(e){t.userId=e?e.user_id:0}),this.whiteTableUpdate(),this.blackTableUpdate()}}}).call(e,a("Umb+"))},QYGZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("4lg9"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"black-nav"},[t._v("\n    车牌号  "),a("el-input",{staticClass:"input-round",staticStyle:{width:"200px","margin-right":"20px"},attrs:{placeholder:"请输入内容",size:"small",clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}},model:{value:t.searchFormData.car_number,callback:function(e){t.$set(t.searchFormData,"car_number",e)},expression:"searchFormData.car_number"}}),t._v(" "),a("el-button",{attrs:{loading:t.searchLoading,type:"primary",size:"small",round:"",icon:"el-icon-search"},on:{click:t.search}})],1),t._v(" "),a("div",{staticClass:"main-padding par-state"},[a("div",{staticClass:"bark-row"},[a("div",{staticClass:"bark-one"},[a("p",{staticClass:"black-title"},[t._m(0),t._v(" "),a("el-button",{attrs:{round:"",icon:"el-icon-plus",size:"small"},on:{click:function(e){t.newblackWhiteDialog("white")}}},[t._v("新增记录")]),t._v(" "),a("el-button",{attrs:{round:"",icon:"el-icon-download",size:"small",type:"danger",loading:t.whiteExportLoading},on:{click:function(e){t.blackWhiteExport("white")}}},[t._v("批量导出")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.whiteTableData,height:"100%"}},[a("el-table-column",{attrs:{label:"编号",prop:"car_id",align:"center",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"car_number","empty-text":"暂无数据",label:"车牌号",align:"center",width:""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",round:""},on:{click:function(a){t.editDialog("white",e.row,a)}}},[a("i",{staticClass:"black-i-bulr"}),t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",round:"",type:"info"},on:{click:function(a){t.blackWhiteDelete("white",e.row,a)}}},[a("i",{staticClass:"black-i-red"}),t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.whiteTableFormData.page,"page-count":t.whiteTablePageTotal,layout:"prev, pager, next, slot, jumper"},on:{"current-change":t.whiteTablePageChange,"update:currentPage":function(e){t.$set(t.whiteTableFormData,"page",e)}}},[a("span",{staticClass:"el-pagination__total page-count-padding"},[t._v("共"+t._s(t.whiteTablePageTotal)+"页")])])],1)],1),t._v(" "),a("div",{staticClass:"bark-one"},[a("p",{staticClass:"black-title"},[t._m(1),t._v(" "),a("el-button",{attrs:{round:"",icon:"el-icon-plus",size:"small"},on:{click:function(e){t.newblackWhiteDialog("black")}}},[t._v("新增记录")]),t._v(" "),a("el-button",{attrs:{round:"",icon:"el-icon-download",size:"small",type:"danger",loading:t.blackExportLoading},on:{click:function(e){t.blackWhiteExport("black")}}},[t._v("批量导出")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.blackTableData,height:"100%"}},[a("el-table-column",{attrs:{label:"编号",prop:"car_id",align:"center",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"car_number","empty-text":"暂无数据",label:"车牌号",align:"center",width:""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",round:""},on:{click:function(a){t.editDialog("black",e.row,a)}}},[a("i",{staticClass:"black-i-bulr"}),t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",round:"",type:"info"},on:{click:function(a){t.blackWhiteDelete("black",e.row,a)}}},[a("i",{staticClass:"black-i-red"}),t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.blackTableFormData.page,"page-count":t.blackTablePageTotal,layout:"prev, pager, next, slot, jumper"},on:{"current-change":t.blackTablePageChange,"update:currentPage":function(e){t.$set(t.blackTableFormData,"page",e)}}},[a("span",{staticClass:"el-pagination__total page-count-padding"},[t._v("共"+t._s(t.blackTablePageTotal)+"页")])])],1)],1)])]),t._v(" "),a("el-dialog",{attrs:{title:"查询","append-to-body":!0,"lock-scroll":!0,modal:!0,"close-on-click-modal":!1,visible:t.searchDialogVisible,width:"30%",top:"35vh"},on:{"update:visible":function(e){t.searchDialogVisible=e}}},[a("el-form",{ref:"searchData",attrs:{model:t.searchData,"label-width":"60px"}},[a("el-col",{attrs:{span:24}},["black"==t.searchData.car_type?a("el-form-item",{attrs:{label:"黑名单"}}):t._e(),t._v(" "),"white"==t.searchData.car_type?a("el-form-item",{attrs:{label:"白名单"}}):t._e()],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"车牌号"}},[a("el-input",{attrs:{readonly:""},model:{value:t.searchData.car_number,callback:function(e){t.$set(t.searchData,"car_number",e)},expression:"searchData.car_number"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",loading:t.editLoading},on:{click:function(e){t.editDialog(t.searchData.car_type,t.searchData,e)}}},[t._v("编 辑")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.editLoading},on:{click:function(e){t.blackWhiteDelete(t.searchData.car_type,t.searchData,e)}}},[t._v("删 除")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.newDialogTitle,"append-to-body":!0,"lock-scroll":!0,modal:!0,"close-on-click-modal":!1,visible:t.newblackWhiteDialogVisiable,width:"30%",top:"35vh"},on:{"update:visible":function(e){t.newblackWhiteDialogVisiable=e}}},[a("p",{staticClass:"new-dialog-info"},[t._v("输入车牌：")]),t._v(" "),a("el-input",{attrs:{placeholder:t.newDialogInfo},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.newblackWhiteClick(e):null}},model:{value:t.newFormData.car_number,callback:function(e){t.$set(t.newFormData,"car_number",e)},expression:"newFormData.car_number"}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:function(e){t.newblackWhiteDialogVisiable=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{loading:t.newLoading,type:"primary",size:"small",round:""},on:{click:t.newblackWhiteClick}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.editDialogTitle,"append-to-body":!0,"lock-scroll":!0,modal:!0,"close-on-click-modal":!1,visible:t.editDialogVisible,width:"30%",top:"35vh"},on:{"update:visible":function(e){t.editDialogVisible=e}}},[a("el-form",{ref:"editFormData",attrs:{model:t.editFormData,"label-width":"60px"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"车牌号"}},[a("el-input",{nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.editClick(e):null}},model:{value:t.editFormData.car_number,callback:function(e){t.$set(t.editFormData,"car_number",e)},expression:"editFormData.car_number"}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{right:"",type:"text"},on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.editLoading},on:{click:t.editClick}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i"),this._v("白名单")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i"),this._v("黑名单")])}]};var o=function(t){a("cwJG")},r=a("vSla")(i.a,l,!1,o,"data-v-009d136e",null);e.default=r.exports},cwJG:function(t,e){}});
//# sourceMappingURL=15.07f3542ce6bccf6db584.js.map