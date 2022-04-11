<template>
	<view class="music-head">
		<view v-if="icon" class="music-head-icon">
			<text class="iconfont" @tap="handleToBack"> &#xe660;</text>|<text class="iconfont" @tap="handleToHome">&#xe601;</text>
		</view>
		{{title}}
	</view>
</template>

<script>
	export default {
		name:"musichead",
		data() {
			return {
				
			};
		},
		props:['title','icon'],
		methods:{
			handleToBack(){
				uni.navigateBack();
				},
			handleToHome(){
				uni.navigateTo({
					url: '/pages/index/index'
				});
		     	}
			}
		}
</script>

<style scoped>
	.music-head{
		height: 75px; 
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: #000000;
		position: relative;
	}
	.music-head-icon{
		position: absolute;
		margin-left: 12px;
		margin-top: 28px;
		width: 90px;
		height: 30px;
		background-color: rgb(170, 170, 170);
		color: rgb(235, 235, 235);
		line-height: 31px;
		border-radius: 15px;
		display: flex;
		justify-content: space-around;
	}
</style>
