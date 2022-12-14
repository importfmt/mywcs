webpackJsonp([1],{"046U":function(e,r){},"1+7L":function(e,r){},J373:function(e,r){},NHnr:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("7+uW"),a={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]};var n=t("VU/8")({name:"app"},a,!1,function(e){t("wMh4")},null,null).exports,o=t("/ocq"),i=t("Xxa5"),u=t.n(i),c=t("exGp"),l=t.n(c),d={data:function(){return{loginForm:{mobile:"",password:""},addUserForm:{username:"",password:"",email:"",mobile:"",city:""},loginFormRules:{mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{min:11,max:11,message:"长度必须为11位",trigger:"blur"}],password:[{required:!0,message:"请输入登录密码",trigger:"blur"},{min:6,max:16,message:"长度在6到16个字符区间",trigger:"blur"}]},addUserRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"用户名的长度在3到10个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"密码的长度在6到16个字符之间",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:function(e,r,t){if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(r))return t();t(new Error("请输入合法的邮箱"))},trigger:"blur"}],mobile:[{required:!0,message:"请输入电话",trigger:"blur"},{validator:function(e,r,t){if(/^(0|86|17951)?(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])[0-9]{8}$/.test(r))return t();t(new Error("请输入合法的号码"))},trigger:"blur"}],city:[{required:!0,message:"请输入地区",trigger:"blur"}]}}},methods:{resetLoginForm:function(){this.$refs.loginFormRef.resetFields()},resetAddUserForm:function(){this.$refs.addUserForm.resetFields()},verifyLoginInfo:function(){var e,r=this;this.$refs.loginFormRef.validate((e=l()(u.a.mark(function e(t){var s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.$http.post("/login",r.loginForm);case 4:if(s=e.sent,console.log(s),201===s.data.code){e.next=8;break}return e.abrupt("return",r.$message.error(s.data.msg));case 8:window.sessionStorage.setItem("token",s.data.data.token),r.$router.push("/home"),r.$message.success(s.data.msg);case 11:case"end":return e.stop()}},e,r)})),function(r){return e.apply(this,arguments)}))},addUser:function(){var e,r=this;this.$refs.addUserFormRef.validate((e=l()(u.a.mark(function e(t){var s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.$http.post("/register",r.addUserForm);case 4:if(s=e.sent,console.log(s),201===s.data.code){e.next=8;break}return e.abrupt("return",r.$message.error(s.data.msg));case 8:r.$message.success(s.data.msg),r.resetAddUserForm();case 10:case"end":return e.stop()}},e,r)})),function(r){return e.apply(this,arguments)}))}}},p={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login_container"},[t("el-row",[t("el-col",{attrs:{span:4}},[e._v(" ")]),e._v(" "),t("el-col",{attrs:{span:7}},[t("div",{staticClass:"registry_box"},[t("el-form",{ref:"addUserFormRef",attrs:{model:e.addUserForm,rules:e.addUserRules,"label-width":"65px"}},[t("br"),t("h1",{staticClass:"login_title"},[e._v("Registry")]),e._v(" "),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.addUser(r)}},model:{value:e.addUserForm.username,callback:function(r){e.$set(e.addUserForm,"username",r)},expression:"addUserForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.addUser(r)}},model:{value:e.addUserForm.password,callback:function(r){e.$set(e.addUserForm,"password",r)},expression:"addUserForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.addUser(r)}},model:{value:e.addUserForm.email,callback:function(r){e.$set(e.addUserForm,"email",r)},expression:"addUserForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[t("el-input",{nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.addUser(r)}},model:{value:e.addUserForm.mobile,callback:function(r){e.$set(e.addUserForm,"mobile",r)},expression:"addUserForm.mobile"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"地区",prop:"city"}},[t("el-input",{nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.addUser(r)}},model:{value:e.addUserForm.city,callback:function(r){e.$set(e.addUserForm,"city",r)},expression:"addUserForm.city"}})],1),e._v(" "),t("el-form-item",{staticClass:"buttons"},[t("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("Registry")]),e._v(" "),t("el-button",{attrs:{type:"info"},on:{click:e.resetAddUserForm}},[e._v("Reset")])],1)],1)],1)]),e._v(" "),t("el-col",{attrs:{span:2}},[e._v(" ")]),e._v(" "),t("el-col",{attrs:{span:7}},[t("div",{staticClass:"login_box"},[t("el-form",{ref:"loginFormRef",staticClass:"login_form",attrs:{model:e.loginForm,rules:e.loginFormRules,"label-width":"0px"}},[t("br"),t("h1",{staticClass:"login_title"},[e._v("WCS")]),e._v(" "),t("el-form-item",{attrs:{prop:"mobile"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-user"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.verifyLoginInfo()}},model:{value:e.loginForm.mobile,callback:function(r){e.$set(e.loginForm,"mobile",r)},expression:"loginForm.mobile"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.verifyLoginInfo()}},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),e._v(" "),t("el-form-item",{staticClass:"buttons"},[t("el-button",{attrs:{type:"primary"},on:{click:e.verifyLoginInfo}},[e._v("Login")]),e._v(" "),t("el-button",{attrs:{type:"info"},on:{click:e.resetLoginForm}},[e._v("Reset")])],1)],1)],1)]),e._v(" "),t("el-col",{attrs:{span:4}},[e._v(" ")])],1)],1)},staticRenderFns:[]};var m=t("VU/8")(d,p,!1,function(e){t("mt0X")},"data-v-2e8124de",null).exports,f={data:function(){return{user:{},menuList:[],iconList:["el-icon-user","el-icon-set-up","el-icon-goods","el-icon-s-order","el-icon-s-data","el-icon-s-data"],isCollapse:!1}},created:function(){this.getMyselfInfo()},methods:{getMyselfInfo:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/info");case 2:if(200===(t=r.sent).data.code){r.next=5;break}return r.abrupt("return",e.$message.error(t.data.msg));case 5:e.user=t.data.data,e.getMenuList();case 7:case"end":return r.stop()}},r,e)}))()},userLogout:function(){window.sessionStorage.clear(),this.$router.push("/login")},getMenuList:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/menus/user");case 2:if(t=r.sent,console.log(t),200===t.data.code){r.next=6;break}return r.abrupt("return",e.$message.error(t.data.msg));case 6:e.$message.success(t.data.msg),e.menuList=t.data.data;case 8:case"end":return r.stop()}},r,e)}))()},toggleCollapse:function(){this.isCollapse=!this.isCollapse}}},v={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-container",{staticClass:"home-container"},[t("el-header",[t("span",[e._v("WCS")]),e._v(" "),t("h3",[e._v("您好，"+e._s(e.user.username))]),e._v(" "),t("el-button",{attrs:{type:"info"},on:{click:e.userLogout}},[e._v("退出")])],1),e._v(" "),t("el-container",[t("el-aside",{attrs:{width:e.isCollapse?"64px":"200px"}},[t("div",{staticClass:"toggle-button",on:{click:e.toggleCollapse}},[e._v("|||")]),e._v(" "),t("el-menu",{attrs:{"background-color":"#333744","text-color":"#ffffff","default-active":e.$route.path,"unique-opened":"",router:"",collapse:e.isCollapse,"collapse-transition":!1}},e._l(e.menuList,function(r,s){return t("el-menu-item",{key:r.index,attrs:{index:"/"+r.path}},[t("template",{slot:"title"},[t("i",{class:e.iconList[s]}),e._v(" "),t("span",[e._v(e._s(r.name))])])],2)}),1)],1),e._v(" "),t("el-main",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var _=t("VU/8")(f,v,!1,function(e){t("xO4k")},"data-v-69c1bd40",null).exports,g={data:function(){return{day:0,orders:{},ordersLength:0,currentOrder:{}}},created:function(){this.getMyselfInfo()},methods:{getMyselfInfo:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/info");case 2:if(200===(t=r.sent).data.code){r.next=5;break}return r.abrupt("return",e.$message.error(t.data.msg));case 5:e.$message.success(t.data.msg),e.user=t.data.data,e.GetDayByUserID(),e.GetOrdersByUserID();case 9:case"end":return r.stop()}},r,e)}))()},GetDayByUserID:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/users/"+e.user.id+"/day");case 2:if(t=r.sent,console.log(t),200===t.data.code){r.next=6;break}return r.abrupt("return",e.$message.error(t.data.msg));case 6:e.$message.success(t.data.msg),e.day=t.data.data.day;case 8:case"end":return r.stop()}},r,e)}))()},GetOrdersByUserID:function(){var e=this;return l()(u.a.mark(function r(){var t,s;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/users/"+e.user.id+"/orders");case 2:if(t=r.sent,console.log(t),200===t.data.code){r.next=6;break}return r.abrupt("return",e.$message.error(t.data.msg));case 6:for(e.$message.success(t.data.msg),e.orders=t.data.data,s=0;s<e.orders.length;s++)e.orders[s].status&&e.orders[s].courier_status&&e.ordersLength++,e.orders[s].status&&e.orders[s].courier_status||(e.currentOrder=e.orders[s]);case 9:case"end":return r.stop()}},r,e)}))()},RedirectSubmitWips:function(){this.$router.push("/submitwips")},UpdateOrderStatusByOdrderID:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.patch("/orders/"+e.currentOrder.id+"/status",{status:!0});case 2:if(201===(t=r.sent).data.code){r.next=5;break}return r.abrupt("return",e.$message.error(t.data.msg));case 5:e.$message.success(t.data.msg),e.currentOrder.status=1,e.ordersLength+=1;case 8:case"end":return r.stop()}},r,e)}))()},UpdateOrderCourierStatusByOdrderID:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.patch("/orders/"+e.currentOrder.id+"/courierstatus",{courierstatus:!0});case 2:if(201===(t=r.sent).data.code){r.next=5;break}return r.abrupt("return",e.$message.error(t.data.msg));case 5:e.$message.success(t.data.msg),e.currentOrder.courier_status=1;case 7:case"end":return r.stop()}},r,e)}))()}}},b={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-row",[t("el-card",[t("b",[t("p",{staticClass:"align_center",staticStyle:{"font-size":"20px"}},[e._v("驾驶过程中，请注意行车规范！")])])]),t("br"),t("br"),e._v(" "),t("el-col",{attrs:{span:2}},[e._v(" ")]),e._v(" "),t("el-col",{attrs:{span:9}},[t("el-card",[t("h3",[e._v("加入天数")]),e._v(" "),t("p",{staticClass:"align_center"},[e._v(" 您已经加入公司："+e._s(e.day)+" 天了。 ")]),e._v(" "),t("p",{staticClass:"align_center"},[e._v(" 感谢您的支持与陪伴。 ")])]),t("br"),t("br"),e._v(" "),t("el-card",[t("h3",[e._v("工作情况")]),e._v(" "),t("p",{staticClass:"align_center"},[e._v(" 您已经完成了："+e._s(e.ordersLength)+" 次运输任务。")])]),t("br"),t("br"),e._v(" "),"{}"!==JSON.stringify(e.currentOrder)?t("el-card",[t("h3",[e._v("运输任务")]),e._v(" "),t("p",{staticClass:"align_center"},[e._v("您当前的运输任务为：")]),e._v(" "),t("p",{staticClass:"align_center"},[e._v(" "+e._s(e.currentOrder.from_city)+" ---\x3e "+e._s(e.currentOrder.to_city))]),e._v(" "),0==e.currentOrder.courier_status&&1==e.currentOrder.status?t("p",{staticClass:"align_center",staticStyle:{color:"green"}},[e._v("货物正在运输中...")]):e._e(),e._v(" "),1==e.currentOrder.courier_status&&1==e.currentOrder.status?t("p",{staticClass:"align_center",staticStyle:{color:"green"}},[e._v("货物已完成运输！")]):e._e(),e._v(" "),0==e.currentOrder.courier_status?t("el-button",{attrs:{type:"success",round:""},on:{click:function(r){return e.UpdateOrderCourierStatusByOdrderID()}}},[e._v("出发")]):e._e(),e._v(" "),1==e.currentOrder.courier_status&&0==e.currentOrder.status?t("el-button",{attrs:{type:"danger",round:""},on:{click:function(r){return e.UpdateOrderStatusByOdrderID()}}},[e._v("确认")]):e._e()],1):e._e(),e._v(" "),"{}"===JSON.stringify(e.currentOrder)?t("el-card",[t("h3",[e._v("运输任务")]),e._v(" "),t("p",{staticClass:"align_center"},[e._v("目前暂无任务，请等待分发，谢谢。")])]):e._e()],1),e._v(" "),t("el-col",{attrs:{span:2}},[e._v(" ")]),e._v(" "),t("el-col",{attrs:{span:9}},[t("el-card",[t("p",{staticClass:"align_center",staticStyle:{"font-size":"50px"}},[e._v("联系客服")]),e._v(" "),t("P",{staticClass:"align_center large_font"},[e._v("如果状态等信息显示错误，请先提交工单处理。")]),e._v(" "),t("P",{staticClass:"align_center large_font"},[e._v("如遇紧急情况请拨打客服热线：+86 12345678910；")]),e._v(" "),t("P",{staticClass:"align_center large_font"},[e._v("如遇非紧急情况请发送邮件至：report@mygin.com，")]),e._v(" "),t("P",{staticClass:"align_center large_font"},[e._v("我们将会联系您解决问题。")]),e._v(" "),t("P",{staticClass:"align_center large_font"},[e._v("回复缓慢，因为生活总是繁忙的。")])],1),t("br"),t("br"),e._v(" "),t("el-card",[t("p",{staticClass:"align_center",on:{click:function(r){return e.RedirectSubmitWips()}}},[e._v("提交工单请点击这里！")])])],1),e._v(" "),t("el-col",{attrs:{span:2}},[e._v(" ")])],1)],1)},staticRenderFns:[]};var y=t("VU/8")(g,b,!1,function(e){t("046U")},"data-v-0fe34f9c",null).exports,w={data:function(){return{user:{},passwordForm:{oldPassword:"",newPassword:"",verifyPassword:""}}},created:function(){this.getMyselfInfo()},methods:{getMyselfInfo:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/info");case 2:if(200===(t=r.sent).data.code){r.next=5;break}return r.abrupt("return",e.$message.error(t.data.msg));case 5:e.$message.success(t.data.msg),e.user=t.data.data;case 7:case"end":return r.stop()}},r,e)}))()},updateUserEmail:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(e.user.email)){r.next=3;break}return r.abrupt("return",e.$message.error("请输入合法邮箱"));case 3:return r.next=5,e.$http.patch("/users/"+e.user.id+"/email",{email:e.user.email});case 5:if(t=r.sent,console.log(t),201===t.data.code){r.next=9;break}return r.abrupt("return",e.$message.error(t.data.msg));case 9:e.$message.success(t.data.msg);case 10:case"end":return r.stop()}},r,e)}))()},updateUserMobile:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(/^(0|86|17951)?(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])[0-9]{8}$/.test(e.user.mobile)){r.next=3;break}return r.abrupt("return",e.$message.error("请输入合法电话号码"));case 3:return r.next=5,e.$http.patch("/users/"+e.user.id+"/mobile",{mobile:e.user.mobile});case 5:if(t=r.sent,console.log(t),201===t.data.code){r.next=9;break}return r.abrupt("return",e.$message.error(t.data.msg));case 9:e.$message.success(t.data.msg);case 10:case"end":return r.stop()}},r,e)}))()},updateUserCity:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(""!=e.user.city){r.next=2;break}return r.abrupt("return",e.$message.error("请输入所在城市"));case 2:return r.next=4,e.$http.patch("/users/"+e.user.id+"/city",{city:e.user.city});case 4:if(t=r.sent,console.log(t),201===t.data.code){r.next=8;break}return r.abrupt("return",e.$message.error(t.data.msg));case 8:e.$message.success(t.data.msg);case 9:case"end":return r.stop()}},r,e)}))()},updateUserPassword:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e.passwordForm.oldPassword.length<6||e.passwordForm.oldPassword.length>16)){r.next=2;break}return r.abrupt("return",e.$message.error("密码不符合规范"));case 2:if(!(e.passwordForm.newPassword.length<6||e.passwordForm.newPassword.length>16)){r.next=4;break}return r.abrupt("return",e.$message.error("密码不符合规范"));case 4:if(!(e.passwordForm.verifyPassword.length<6||e.passwordForm.verifyPassword.length>16)){r.next=6;break}return r.abrupt("return",e.$message.error("密码不符合规范"));case 6:return r.next=8,e.$http.patch("/users/"+e.user.id+"/password",e.passwordForm);case 8:if(t=r.sent,console.log(t),201===t.data.code){r.next=12;break}return r.abrupt("return",e.$message.error(t.data.msg));case 12:e.$message.success(t.data.msg),e.passwordForm.oldPassword="",e.passwordForm.newPassword="",e.passwordForm.verifyPassword="";case 16:case"end":return r.stop()}},r,e)}))()}}},h={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),e._v(" "),t("el-breadcrumb-item",[e._v("个人信息")])],1),e._v(" "),t("el-card",[t("el-row",[t("el-col",{attrs:{span:4}},[e._v(" ")]),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-card",[t("h1",[e._v("用户名：")]),e._v(" "),t("h3",{staticClass:"align_center"},[e._v(e._s(e.user.username))]),e._v(" "),t("h3",{staticClass:"align_center"},[e._v("当前权限为："+e._s(e.user.role))])]),e._v(" \n\t\t\t\t\n\t\t\t\t"),e._v(" "),t("el-card",[t("h1",[e._v("邮箱")]),e._v(" "),t("h3",{staticClass:"align_center"},[e._v("当前邮箱为："+e._s(e.user.email))]),e._v(" "),t("el-input",{nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateUserEmail(r)}},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}}),t("br"),t("br"),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.updateUserEmail}},[e._v(" 提交")])],1),e._v(" \n\t\t\t\t"),e._v(" "),t("el-card",[t("h1",[e._v("手机")]),e._v(" "),t("h3",{staticClass:"align_center"},[e._v("当前手机为："+e._s(e.user.mobile))]),e._v(" "),t("el-input",{nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateUserMobile(r)}},model:{value:e.user.mobile,callback:function(r){e.$set(e.user,"mobile",r)},expression:"user.mobile"}}),t("br"),t("br"),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.updateUserMobile}},[e._v(" 提交")])],1)],1),e._v(" "),t("el-col",{attrs:{span:10,offset:1}},[t("el-card",[t("h1",[e._v("城市")]),e._v(" "),t("h3",{staticClass:"align_center"},[e._v("当前城市为："+e._s(e.user.city))]),e._v(" "),t("el-input",{nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateUserCity(r)}},model:{value:e.user.city,callback:function(r){e.$set(e.user,"city",r)},expression:"user.city"}}),t("br"),t("br"),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.updateUserCity}},[e._v(" 提交")])],1),e._v(" \n\t\t\t\t"),t("el-card",[t("h1",[e._v("密码")]),e._v(" "),t("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password",placeholder:"请输入旧密码"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateUserPassword()}},model:{value:e.passwordForm.oldPassword,callback:function(r){e.$set(e.passwordForm,"oldPassword",r)},expression:"passwordForm.oldPassword"}}),t("br"),t("br"),e._v(" "),t("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password",placeholder:"请输入新密码"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateUserPassword()}},model:{value:e.passwordForm.newPassword,callback:function(r){e.$set(e.passwordForm,"newPassword",r)},expression:"passwordForm.newPassword"}}),t("br"),t("br"),e._v(" "),t("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password",placeholder:"请再次输入新密码"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateUserPassword()}},model:{value:e.passwordForm.verifyPassword,callback:function(r){e.$set(e.passwordForm,"verifyPassword",r)},expression:"passwordForm.verifyPassword"}}),t("br"),t("br"),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.updateUserPassword}},[e._v(" 提交")])],1),e._v(" \n\t\t\t\t"),t("el-card",[t("h1",[e._v("状态")]),e._v(" "),1==e.user.status?t("h3",{staticClass:"align_center"},[e._v("当前用户正在作业")]):e._e(),e._v(" "),0==e.user.status?t("h3",{staticClass:"align_center"},[e._v("当前用户空闲")]):e._e()])],1),e._v(" "),t("el-col",{attrs:{span:4}},[e._v(" ")])],1)],1)],1)},staticRenderFns:[]};var k=t("VU/8")(w,h,!1,function(e){t("1+7L")},"data-v-37690b39",null).exports,x={data:function(){return{user:{},wipInfo:{title:"",desc:"",userID:""},wips:{}}},created:function(){this.getMyselfInfo()},methods:{getMyselfInfo:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/info");case 2:if(200===(t=r.sent).data.code){r.next=5;break}return r.abrupt("return",e.$message.error(t.data.msg));case 5:e.$message.success(t.data.msg),e.user=t.data.data,e.getWipsByID();case 8:case"end":return r.stop()}},r,e)}))()},addWip:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e.wipInfo.userID=e.user.id,console.log(e.wipInfo),r.next=4,e.$http.post("/wips",e.wipInfo);case 4:if(201===(t=r.sent).data.code){r.next=7;break}return r.abrupt("return",e.$message.error(t.data.msg));case 7:e.$message.success(t.data.msg),e.wipInfo.title="",e.wipInfo.desc="",e.getWipsByID();case 11:case"end":return r.stop()}},r,e)}))()},getWipsByID:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/users/"+e.user.id+"/wips");case 2:if(200===(t=r.sent).data.code){r.next=5;break}return r.abrupt("return",e.$message.error(t.data.msg));case 5:e.$message.success(t.data.msg),e.wips=t.data.data,console.log(wips);case 8:case"end":return r.stop()}},r,e)}))()}}},$={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),e._v(" "),t("el-breadcrumb-item",[e._v("工单提交")])],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:10}},[t("el-card",[t("h3",[e._v("工单标题")]),e._v(" "),t("el-input",{model:{value:e.wipInfo.title,callback:function(r){e.$set(e.wipInfo,"title",r)},expression:"wipInfo.title"}}),e._v(" "),t("h3",[e._v("工单描述")]),e._v(" "),t("el-input",{attrs:{type:"textarea",maxlength:"255",rows:"20"},model:{value:e.wipInfo.desc,callback:function(r){e.$set(e.wipInfo,"desc",r)},expression:"wipInfo.desc"}}),t("br"),t("br"),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.addWip}},[e._v("提交工单")])],1)],1),e._v(" "),t("el-col",{attrs:{span:1}},[e._v(" ")]),e._v(" "),t("el-col",{attrs:{span:13}},[t("el-card",[t("el-table",{attrs:{data:e.wips,stripe:""}},[t("el-table-column",{attrs:{width:"50px",label:"ID",prop:"id"}}),e._v(" "),t("el-table-column",{attrs:{label:"创建时间",prop:"created_at"}}),e._v(" "),t("el-table-column",{attrs:{label:"工单标题",prop:"title"}}),e._v(" "),t("el-table-column",{attrs:{label:"工单内容",prop:"desc"}}),e._v(" "),t("el-table-column",{attrs:{label:"工单回复",prop:"reply"}}),e._v(" "),t("el-table-column",{attrs:{label:"工单状态",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(r){return[1==r.row.status?t("el-tag",{attrs:{type:"success"}},[e._v("已回复")]):e._e(),e._v(" "),0==r.row.status?t("el-tag",{attrs:{type:"danger"}},[e._v("未回复")]):e._e()]}}])})],1)],1)],1)],1)],1)},staticRenderFns:[]},F=t("VU/8")(x,$,!1,null,null,null).exports,U={data:function(){return{orders:{},user:{}}},created:function(){this.getMyselfInfo()},methods:{getMyselfInfo:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/info");case 2:if(200===(t=r.sent).data.code){r.next=5;break}return r.abrupt("return",e.$message.error(t.data.msg));case 5:e.$message.success(t.data.msg),e.user=t.data.data,e.GetOrdersByUserID();case 8:case"end":return r.stop()}},r,e)}))()},GetOrdersByUserID:function(){var e=this;return l()(u.a.mark(function r(){var t;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/users/"+e.user.id+"/orders");case 2:if(t=r.sent,console.log(t),200===t.data.code){r.next=6;break}return r.abrupt("return",e.$message.error(t.data.msg));case 6:e.$message.success(t.data.msg),e.orders=t.data.data;case 8:case"end":return r.stop()}},r,e)}))()}}},O={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),e._v(" "),t("el-breadcrumb-item",[e._v("工单记录")])],1),e._v(" "),"{}"!==JSON.stringify(e.orders)?t("el-card",[t("el-table",{attrs:{data:e.orders,stripe:""}},[t("el-table-column",{attrs:{width:"50px",label:"ID",prop:"id"}}),e._v(" "),t("el-table-column",{attrs:{label:"订单编号",prop:"number"}}),e._v(" "),t("el-table-column",{attrs:{label:"创建时间",prop:"created_at"}}),e._v(" "),t("el-table-column",{attrs:{label:"承运用户",prop:"username"}}),e._v(" "),t("el-table-column",{attrs:{label:"承运车辆",prop:"license"}}),e._v(" "),t("el-table-column",{attrs:{label:"货物名称",prop:"goodsname"}}),e._v(" "),t("el-table-column",{attrs:{label:"出发城市",prop:"from_city"}}),e._v(" "),t("el-table-column",{attrs:{label:"到达城市",prop:"to_city"}})],1)],1):e._e()],1)},staticRenderFns:[]},C=t("VU/8")(U,O,!1,null,null,null).exports;s.default.use(o.a);var I=new o.a({routes:[{path:"/",redirect:"/login"},{path:"/login",component:m},{path:"/home",component:_,redirect:"/welcome",children:[{path:"/welcome",component:y},{path:"/personinformation",component:k},{path:"/submitwips",component:F},{path:"/workrecord",component:C}]}]});I.beforeEach(function(e,r,t){return"/login"===e.path?t():window.sessionStorage.getItem("token")?void t():t("/login")});var P=I,E=t("mtWM"),S=t.n(E),R=t("Y81h"),L=t.n(R),D=(t("UVIz"),t("zL8q")),M=t.n(D);t("tvR6"),t("J373");S.a.defaults.baseURL="http://127.0.0.1:8888/api/v1/",S.a.interceptors.request.use(function(e){return L.a.start(),e.headers.Authorization="Bearer "+window.sessionStorage.getItem("token"),e}),S.a.interceptors.response.use(function(e){return L.a.done(),e}),s.default.config.productionTip=!1,s.default.prototype.$http=S.a,s.default.use(M.a),s.default.filter("dataFormat",function(e){var r=new Date(e);return r.getFullYear()+"/"+(r.getMonth()+1+"").padStart(2,"0")+"/"+(r.getDate()+"").padStart(2,"0")+" "+(r.getHours()+"").padStart(2,"0")+":"+(r.getMinutes()+"").padStart(2,"0")+":"+(r.getSeconds()+"").padStart(2,"0")}),new s.default({el:"#app",router:P,components:{App:n},template:"<App/>"})},UVIz:function(e,r){},mt0X:function(e,r){},tvR6:function(e,r){},wMh4:function(e,r){},xO4k:function(e,r){}},["NHnr"]);
//# sourceMappingURL=app.0334d19cde87d2c30bab.js.map