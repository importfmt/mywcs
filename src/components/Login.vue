<template>
	<div class="login_container">
		<el-row>
			<el-col :span="4">&nbsp;</el-col>
			<el-col :span="7">
				<div class="registry_box">
                                        
					<el-form :model="addUserForm" :rules="addUserRules" ref="addUserFormRef" label-width="65px">
                                                <br><h1 class="login_title">Registry</h1>
                                                <el-form-item label="用户名" prop="username">
                                                        <el-input v-model="addUserForm.username" @keyup.enter.native="addUser"></el-input>
                                                </el-form-item>
                                                <el-form-item label="密码" prop="password">
                                                        <el-input v-model="addUserForm.password" @keyup.enter.native="addUser" type="password"></el-input>
                                                </el-form-item>
                                                <el-form-item label="邮箱" prop="email">
                                                        <el-input v-model="addUserForm.email" @keyup.enter.native="addUser"></el-input>
                                                </el-form-item>
                                                <el-form-item label="电话" prop="mobile">
                                                        <el-input v-model="addUserForm.mobile"  @keyup.enter.native="addUser"></el-input>
                                                </el-form-item>
                                                <el-form-item label="地区" prop="city">
                                                        <el-input v-model="addUserForm.city"  @keyup.enter.native="addUser"></el-input>
                                                </el-form-item>
                                                <el-form-item class="buttons">
							<el-button type="primary" @click="addUser">Registry</el-button>
							<el-button type="info" @click="resetAddUserForm">Reset</el-button>
						</el-form-item>
                                        </el-form>
                                        
				</div>
			</el-col>
			<el-col :span="2">&nbsp;</el-col>
			<el-col :span="7">
				<div class="login_box">
					<el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
						<!-- Title -->
						<br><h1 class="login_title">WCS</h1>
						<!-- Account -->
						<el-form-item prop="mobile">
							<el-input @keyup.enter.native="verifyLoginInfo()" v-model="loginForm.mobile" prefix-icon="el-icon-user" ></el-input>
						</el-form-item>
						<!-- Password -->
						<el-form-item prop="password">
							<el-input @keyup.enter.native="verifyLoginInfo()" v-model="loginForm.password" prefix-icon="el-icon-lock" type="password" ></el-input>
						</el-form-item>
						<!-- Button -->
						<el-form-item class="buttons">
							<el-button type="primary" @click="verifyLoginInfo">Login</el-button>
							<el-button type="info" @click="resetLoginForm">Reset</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
			<el-col :span="4">&nbsp;</el-col>

		</el-row>
	</div>
</template>

<script type="text/javascript">
	export default{
		data() {
            		var checkEmail = (rules,value,callback) => {
				const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
				if(regEmail.test(value)) return callback()
				callback(new Error('请输入合法的邮箱'))
            		}
			var checkMobile = (rules,value,callback) => {
				const regMobile = /^(0|86|17951)?(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])[0-9]{8}$/
				if(regMobile.test(value)) return callback()
				callback(new Error('请输入合法的号码'))
            		}
			return{
				loginForm: {
					mobile: "",
					password: "",
				},
                		addUserForm: {
                    			username: '',
                    			password: '',
                    			email: '',
                    			mobile: '',
                    			city: '',
                		},
				loginFormRules: {
					mobile: [
						{required: true, message: "请输入手机号", trigger: "blur"},
						{min: 11,max: 11, message: "长度必须为11位", trigger: "blur"},
					],
					password: [
						{required: true, message: "请输入登录密码", trigger: "blur"},
						{min: 6,max: 16, message: "长度在6到16个字符区间", trigger: "blur"},
					],
                                },
                                addUserRules: {
                                        username: [{required: true, message: '请输入用户名', trigger: 'blur'},{min: 3, max: 10, message: '用户名的长度在3到10个字符之间', trigger: 'blur'}],
                                        password: [{required: true, message: '请输入密码', trigger: 'blur'},{min: 6, max: 16, message: '密码的长度在6到16个字符之间', trigger: 'blur'}],
                                        email: [{required: true, message: '请输入邮箱', trigger: 'blur'},{validator: checkEmail, trigger: 'blur'}],
                                        mobile: [{required: true, message: '请输入电话', trigger: 'blur'},{validator: checkMobile, trigger: 'blur'}],
                                        city: [{required:true,message: '请输入地区', trigger: 'blur'}],
                                },
			}
		},
		methods: {
			// Reset loginFrom
                        resetLoginForm:function() {this.$refs.loginFormRef.resetFields()},
                        resetAddUserForm:function() {this.$refs.addUserForm.resetFields()},
			// Verify LoginInfo
			verifyLoginInfo:function() {
				this.$refs.loginFormRef.validate(async (vaild) => {
					if(!vaild) return
					const result = await this.$http.post('/login',this.loginForm)
					console.log(result)
					// Login failed
					if(result.data.code !== 201) return this.$message.error(result.data.msg)
					// Login successed
					window.sessionStorage.setItem("token",result.data.data.token)  // Save token info
					this.$router.push('/home') // Redirect
					this.$message.success(result.data.msg)
				})
                        },
                         addUser() {
                             this.$refs.addUserFormRef.validate(async valid => {
                                 if(!valid) return
                                 const result = await this.$http.post('/register',this.addUserForm)
                                 console.log(result)
                                 if(result.data.code !== 201) return this.$message.error(result.data.msg)
                                 this.$message.success(result.data.msg)
                                 this.resetAddUserForm()
                             })
                         },
		},
	}
</script>

<style type="text/css" scoped="true">
	.login_container{background-color: #2b8b6f;height: 100%;}
	.registry_box{width: 500px; height: 600px;background-color: rgb(228, 154, 179); border-radius: 3px; margin-top: 200px; padding: 0 30px;}
	.login_box{width: 500px; height: 300px; background-color:cadetblue; border-radius: 3px; margin-top: 200px;}
	.login_title{text-align: center;}
        .login_form{width: 500px;padding: 0 20px; box-sizing: border-box;}
        .register_form{width: 500px; padding: 30px; box-sizing: border-box;}
	.buttons{display: flex;justify-content: flex-end;}
</style>