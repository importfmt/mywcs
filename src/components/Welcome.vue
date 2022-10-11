<template>
	<div>
		<el-row>
			<el-card>
				<b><p style="font-size:20px" class="align_center">驾驶过程中，请注意行车规范！</p></b>
			</el-card><br><br>
			<el-col :span="2">&nbsp;</el-col>
			<el-col :span="9">
				<el-card>
					<h3>加入天数</h3>
					<p  class="align_center"> 您已经加入公司：{{ day }} 天了。 </p>
					<p  class="align_center"> 感谢您的支持与陪伴。 </p>
				</el-card><br><br>
				<el-card>
					<h3>工作情况</h3>
					<p class="align_center"> 您已经完成了：{{ ordersLength }} 次运输任务。</p>
				</el-card><br><br>
				<el-card v-if="JSON.stringify(currentOrder) !== '{}'">
					<h3>运输任务</h3>
					<p class="align_center">您当前的运输任务为：</p>
					<p class="align_center"> {{ currentOrder.from_city }} ---> {{currentOrder.to_city}}</p>
					<p class="align_center" style="color:green" v-if="currentOrder.courier_status == 0 && currentOrder.status == 1" >货物正在运输中...</p>
					<p class="align_center" style="color:green" v-if="currentOrder.courier_status == 1 && currentOrder.status == 1" >货物已完成运输！</p>
					<el-button v-if="currentOrder.courier_status == 0" type="success" round @click="UpdateOrderCourierStatusByOdrderID()">出发</el-button>
					<el-button v-if="currentOrder.courier_status == 1 && currentOrder.status == 0" type="danger" round @click="UpdateOrderStatusByOdrderID()">确认</el-button>
				</el-card>
				<el-card v-if="JSON.stringify(currentOrder) === '{}'">
					<h3>运输任务</h3>
					<p class="align_center">目前暂无任务，请等待分发，谢谢。</p>
				</el-card>
			</el-col>
			<el-col :span="2">&nbsp;</el-col>
			<el-col :span="9">
				<el-card>
					<p style="font-size:50px" class="align_center">联系客服</p>
					<P class="align_center large_font">如果状态等信息显示错误，请先提交工单处理。</P>
					<P class="align_center large_font">如遇紧急情况请拨打客服热线：+86 12345678910；</P>
					<P class="align_center large_font">如遇非紧急情况请发送邮件至：report@mygin.com，</P>
					<P class="align_center large_font">我们将会联系您解决问题。</P>
					<P class="align_center large_font">回复缓慢，因为生活总是繁忙的。</P>
				</el-card><br><br>
				<el-card>
					<p class="align_center" @click="RedirectSubmitWips()">提交工单请点击这里！</p>
				</el-card>
			</el-col>
			<el-col :span="2">&nbsp;</el-col>
		</el-row>
	</div>
</template>

<script>
    export default {
        data(){
            return{
		    day: 0,
		    orders: {},
		    ordersLength: 0,
		    currentOrder: {},

            }
        },
        created(){this.getMyselfInfo()},
        methods: {
		async getMyselfInfo() {
	        	const result = await this.$http.get('/info')
        		if(result.data.code !== 200) return this.$message.error(result.data.msg)
			this.$message.success(result.data.msg)
			this.user = result.data.data
			this.GetDayByUserID()
			this.GetOrdersByUserID()
		},
		async GetDayByUserID() {
			const result = await this.$http.get('/users/' + this.user.id + '/day')
			console.log(result)
			if(result.data.code !== 200) return this.$message.error(result.data.msg)
			this.$message.success(result.data.msg)
			this.day = result.data.data.day
		},
		async GetOrdersByUserID() {
			const result = await this.$http.get('/users/' + this.user.id + '/orders')
			console.log(result)
			if(result.data.code !== 200) return this.$message.error(result.data.msg)
			this.$message.success(result.data.msg)
			this.orders = result.data.data
			for (var i = 0; i < this.orders.length; i++) {
				if (this.orders[i].status && this.orders[i].courier_status ) this.ordersLength++
				if (!this.orders[i].status || !this.orders[i].courier_status ) this.currentOrder = this.orders[i]
			}
		},
		RedirectSubmitWips() {
			this.$router.push('/submitwips')
		},
		async UpdateOrderStatusByOdrderID() {
			const result = await this.$http.patch('/orders/' + this.currentOrder.id + '/status', {"status": true})
			if(result.data.code !== 201) return this.$message.error(result.data.msg)
			this.$message.success(result.data.msg)
			this.currentOrder.status = 1
			this.ordersLength += 1
		},
		async UpdateOrderCourierStatusByOdrderID() {
			const result = await this.$http.patch('/orders/' + this.currentOrder.id + '/courierstatus', {"courierstatus": true})
			if(result.data.code !== 201) return this.$message.error(result.data.msg)
			this.$message.success(result.data.msg)
			this.currentOrder.courier_status = 1
			
		},
        },
    }
</script>

<style scoped>
	.align_center{text-align: center;}
	.large_font{font-size: 20px;}
</style>
