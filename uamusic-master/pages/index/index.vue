<template>
	<view class="index">
		<musichead title="网易云音乐"  :icon="false"></musichead>
		<view class=" container">
			<view class="login">
				<text class="iconfont">&#xe62e;</text>
				登录
			</view>
			<scroll-view scroll-y="true" >
				<view class="index-search">
				 <text class="iconfont">&#xe617; </text>
				 <input type="text" @tap="handleToSearch" value=""placeholder="搜索歌曲" />
				</view>
				
				<!-- <view class="index-list">
					<view class="index-list-item">
						<view class="index-list-img">
							<image src="../../static/logo.png" mode=""></image>
							<text>每天更新</text>
						</view>
						<view class="index-list-text">
							<view >歌曲</view>
							<view >歌曲</view>
							<view >歌曲</view>
						</view>
					</view>
				</view> -->
				
			    
				<view class="index-list">
					<view  class="index-list-item" v-for="(item,index) in toplist" :key="index" >
						<view class="index-list-img" @tap="handleToList">
							<image :src="item.coverImgUrl" mode="" ></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="index-list-text" >
							<view v-for="(item,index) in item.tracks" :key="index">{{index+1}}.{{item.first}}-{{item.second}}</view> 
						</view>
					</view>
				</view>
				
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import '@/common/iconfont.css';
	import musichead from'../../components/musichead/musichead.vue';
	import {toplist} from '../../common/api.js';
	export default {
		data() {
			return {
				toplist:[]
			}
		},
		components:{
			musichead
		},
		onLoad() {
			toplist().then((res)=>{
			if(res.length){
				this.toplist=res;
			}
			})
		},
		methods: {
			handleToList(){
				uni.navigateTo({
					url: '/pages/list/list',
					// success: res => {},
					// fail: () => {},
					// complete: () => {}
				});
			},
			handleToSearch(){
				uni.navigateTo({
					url: '/pages/search/search',
					// success: res => {},
					// fail: () => {},
					// complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	.index{
		
	}
	.login{
		display: flex;
		align-items: center;
		margin-bottom: 25rpx;
	}
	.login text{
		height: 30rpx;
		margin-left: 30rpx;
		margin-right: 20rpx;
	}
	.login button{
		height: 40rpx;
		width: 40rpx;
	}
	.index-search{
		display: flex;
		align-items: center;
		height: 60rpx;
		/* 上右下左 */
		margin:0rpx 40rpx 30rpx 30rpx;
		background-color: #eae6dd;
		border-radius: 15rpx;
	}
	.index-search text{
		font-size: 26rpx;
		margin-left: 30rpx;
	}
	.index-search input{
		margin-left: 10rpx;
	}
	.index-list{
		margin: 10rpx 20rpx  ;
		
	}
	.index-list-item{
		display: flex;
		margin-bottom: 34rpx;
	}
	.index-list-img{
		width: 212rpx;
		height: 212rpx;
		position: relative;
		/* overflow: hidden; */
	}
	.index-list-img image{
	 /* width: 100%;
		height: 100%; */
			width: 212rpx;
		height: 212rpx;
		border-radius: 25rpx;
		margin-top: 10rpx;
	}
	.index-list-img text{
		position: absolute;
		left: 17rpx;
		bottom: 14rpx;
		color: white;
		font-size: 25rpx;
	}
	.index-list-text{
		margin-left:  20rpx;
		line-height: 60rpx;
		font-size:26rpx;
		margin-top: auto;
		white-space: nowrap;
		overflow: hidden;
	}
</style>
