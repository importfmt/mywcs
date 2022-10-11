<template>
	<div>
    	<!-- Breadcrumb -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>工单记录</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card v-if="JSON.stringify(orders) !== '{}'">
			<el-table :data="orders" stripe>
				<!-- <el-table-column type="index" label="#"></el-table-column> -->
				<el-table-column width="50px" label="ID" prop="id"></el-table-column>
				<el-table-column label="订单编号" prop="number"></el-table-column>
				<el-table-column label="创建时间" prop="created_at"></el-table-column>
				<el-table-column label="承运用户" prop="username"></el-table-column>
				<el-table-column label="承运车辆" prop="license"></el-table-column>
				<el-table-column label="货物名称" prop="goodsname"></el-table-column>
				<el-table-column label="出发城市" prop="from_city"></el-table-column>
				<el-table-column label="到达城市" prop="to_city"></el-table-column>
			</el-table>  
        	</el-card>
	</div>
</template>

<script>
    export default {
        data(){
            return{
		    orders: {},
		    user:{},
            }
        },
        created(){this.getMyselfInfo()},
        methods: {
		async getMyselfInfo() {
	        	const result = await this.$http.get('/info')
        		if(result.data.code !== 200) return this.$message.error(result.data.msg)
			this.$message.success(result.data.msg)
			this.user = result.data.data
			this.GetOrdersByUserID()
		},
		async GetOrdersByUserID() {
			const result = await this.$http.get('/users/' + this.user.id + '/orders')
			console.log(result)
			if(result.data.code !== 200) return this.$message.error(result.data.msg)
			this.$message.success(result.data.msg)
			this.orders = result.data.data
		},
        },
    }
</script>
