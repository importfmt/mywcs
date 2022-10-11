<template>
	<div>
    	<!-- Breadcrumb -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>工单提交</el-breadcrumb-item>
		</el-breadcrumb>
		<el-row>
			<el-col :span="10">
				<el-card>
					<h3>工单标题</h3>
					<el-input v-model="wipInfo.title"></el-input>
					<h3>工单描述</h3>
					<el-input v-model="wipInfo.desc" type="textarea" maxlength="255" rows="20" ></el-input><br><br>
					<el-button type="primary" @click="addWip">提交工单</el-button>
				</el-card>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="13">
				<el-card>
					<el-table :data="wips" stripe>
					<el-table-column width="50px" label="ID" prop="id"></el-table-column>
					<el-table-column label="创建时间" prop="created_at"></el-table-column>
					<el-table-column label="工单标题" prop="title"></el-table-column>
					<el-table-column label="工单内容" prop="desc"></el-table-column>
					<el-table-column label="工单回复" prop="reply"></el-table-column>
					<el-table-column label="工单状态" prop="status">
						<template slot-scope="scope">
							<el-tag v-if="scope.row.status == 1" type="success">已回复</el-tag>
							<el-tag v-if="scope.row.status == 0" type="danger">未回复</el-tag>
						</template>
					</el-table-column>
					</el-table>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script type="text/javascript">
	export default{
		data() {
			return{
				user: {},
				wipInfo: {
					title: "",
					desc: "",
					userID: "",
				},
				wips: {},
			}
		},
		created(){this.getMyselfInfo()},
		methods: {
			async getMyselfInfo() {
		        const result = await this.$http.get('/info')
                if(result.data.code !== 200) return this.$message.error(result.data.msg)
				this.$message.success(result.data.msg)
				this.user = result.data.data
				this.getWipsByID()
			},
			async addWip() {
				this.wipInfo.userID = this.user.id
				console.log(this.wipInfo)
				const result = await this.$http.post('/wips', this.wipInfo)
				if(result.data.code !== 201) return this.$message.error(result.data.msg)
				this.$message.success(result.data.msg)
				this.wipInfo.title = ""
				this.wipInfo.desc = ""
				this.getWipsByID()
			},
			async getWipsByID() {
				const result = await this.$http.get('/users/' + this.user.id + "/wips")
                		if(result.data.code !== 200) return this.$message.error(result.data.msg)
				this.$message.success(result.data.msg)
				this.wips = result.data.data
				console.log(wips)
			},
		}
	}
</script>
