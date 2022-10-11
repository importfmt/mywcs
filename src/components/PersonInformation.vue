<template>
   <div>
    <!-- Breadcrumb -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人信息</el-breadcrumb-item>
    </el-breadcrumb>
	<el-card>
		<el-row>
			<el-col :span="4">&nbsp;</el-col>
			<el-col :span="6">
				<!-- Username -->
				<el-card>
					<h1>用户名：</h1>
					<h3 class="align_center">{{ user.username }}</h3>
					<h3 class="align_center">当前权限为：{{ user.role }}</h3>
				</el-card>&nbsp;
				
				<!-- Email -->
				<el-card>
					<h1>邮箱</h1>
					<h3 class="align_center">当前邮箱为：{{ user.email }}</h3>
						<el-input v-model="user.email" @keyup.enter.native="updateUserEmail"></el-input><br><br>
					<el-button type="primary" @click="updateUserEmail"> 提交</el-button>
				</el-card>&nbsp;
				<!-- Mobile -->
				<el-card>
					<h1>手机</h1>
					<h3 class="align_center">当前手机为：{{ user.mobile }}</h3>
						<el-input v-model="user.mobile" @keyup.enter.native="updateUserMobile"></el-input><br><br>
					<el-button type="primary" @click="updateUserMobile"> 提交</el-button>
				</el-card>
			</el-col>
			<el-col :span="10" :offset="1">
				<el-card>
					<h1>城市</h1>
					<h3 class="align_center">当前城市为：{{ user.city }}</h3>
						<el-input v-model="user.city" @keyup.enter.native="updateUserCity"></el-input><br><br>
					<el-button type="primary" @click="updateUserCity"> 提交</el-button>					
				</el-card>&nbsp;
				<el-card>
					<h1>密码</h1>
						<el-input @keyup.enter.native="updateUserPassword()" v-model="passwordForm.oldPassword" prefix-icon="el-icon-lock" type="password" placeholder="请输入旧密码"></el-input><br><br>
						<el-input @keyup.enter.native="updateUserPassword()" v-model="passwordForm.newPassword" prefix-icon="el-icon-lock" type="password" placeholder="请输入新密码"></el-input><br><br>
						<el-input @keyup.enter.native="updateUserPassword()" v-model="passwordForm.verifyPassword" prefix-icon="el-icon-lock" type="password" placeholder="请再次输入新密码"></el-input><br><br>
					<el-button type="primary" @click="updateUserPassword"> 提交</el-button>					
				</el-card>&nbsp;
				<el-card>
					<h1>状态</h1>
					<h3 class="align_center" v-if="user.status == 1">当前用户正在作业</h3>
					<h3 class="align_center" v-if="user.status == 0">当前用户空闲</h3>

				</el-card>
			</el-col>	
			<el-col :span="4">&nbsp;</el-col>

		</el-row>
	</el-card>
   </div>
</template>

<script type="text/javascript">
	export default{
		data() {
			return{
				user: {},
				passwordForm: {
					oldPassword: "",
					newPassword: "",
					verifyPassword: "",
				},
			}
		},
		created(){this.getMyselfInfo()},
		methods: {
			async getMyselfInfo() {
		        	const result = await this.$http.get('/info')
                		
                		if(result.data.code !== 200) return this.$message.error(result.data.msg)
				this.$message.success(result.data.msg)
				this.user = result.data.data
			},
			async updateUserEmail() {
				const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
				if(!regEmail.test(this.user.email)) return this.$message.error("请输入合法邮箱")
				const result = await this.$http.patch('/users/' + this.user.id + '/email', {"email": this.user.email})
				console.log(result)
				if(result.data.code !== 201) return this.$message.error(result.data.msg)
				this.$message.success(result.data.msg)
			},
			async updateUserMobile() {
				const regMobile = /^(0|86|17951)?(13[0-9]|14[57]|15[012356789]|17[678]|18[0-9])[0-9]{8}$/
				if(!regMobile.test(this.user.mobile)) return this.$message.error("请输入合法电话号码")
				const result = await this.$http.patch('/users/' + this.user.id + '/mobile', {"mobile": this.user.mobile})
				console.log(result)
				if(result.data.code !== 201) return this.$message.error(result.data.msg)
				this.$message.success(result.data.msg)
				
			},
			async updateUserCity() {
				if (this.user.city == "") return this.$message.error("请输入所在城市")
				const result = await this.$http.patch('/users/' + this.user.id + '/city', {"city": this.user.city})
				console.log(result)
				if(result.data.code !== 201) return this.$message.error(result.data.msg)
				this.$message.success(result.data.msg)
				
			},
			async updateUserPassword() {
				if (this.passwordForm.oldPassword.length < 6 || this.passwordForm.oldPassword.length > 16) return this.$message.error("密码不符合规范")
				if (this.passwordForm.newPassword.length < 6 || this.passwordForm.newPassword.length > 16) return this.$message.error("密码不符合规范")
				if (this.passwordForm.verifyPassword.length < 6 || this.passwordForm.verifyPassword.length > 16) return this.$message.error("密码不符合规范")
				const result = await this.$http.patch('/users/' + this.user.id + '/password', this.passwordForm)
				console.log(result)
				if(result.data.code !== 201) return this.$message.error(result.data.msg)
				this.$message.success(result.data.msg)
				this.passwordForm.oldPassword = ""
				this.passwordForm.newPassword = ""
				this.passwordForm.verifyPassword = ""
			},
		}
	}
</script>

<style scoped>
	.align_center{text-align: center;}
</style>