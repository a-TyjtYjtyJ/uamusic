<template>
	<view>
		<musichead title="搜索" :icon="true"></musichead>
		<scroll-view scroll-y="true">
			<view class="search">
				<view class="index-search">
					<text class="iconfont">&#xe617; </text>
					<input type="text" value="" placeholder="搜索歌曲" />
				</view>
				<view class="search-hotlist">
					<text> 1 </text>
					<text> 文字文字 </text>
				</view>
				<view class="search-hotlist">
					<text> 1 </text>
					<text> 文字文字 </text>
				</view>
				<view class="search-hotlist">
					<text> 1 </text>
					<text> 文字文字 </text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import '@/common/iconfont.css';
	import musichead from '../../components/musichead/musichead.vue';
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.index-search {
		display: flex;
		align-items: center;
		height: 60rpx;
		/* 上右下左 */
		margin: 0rpx 40rpx 30rpx 30rpx;
		background-color: #eae6dd;
		border-radius: 15rpx;
	}

	.index-search text {
		font-size: 26rpx;
		margin-left: 30rpx;
	}

	.index-search input {
		margin-left: 10rpx;
	}
	.search-hotlist{
		text-align: center;
		height:50rpx;
		width: 100%;
	}
	.search-hotlist text:nth-child(1){
		font-size: 45rpx;
	}
	.search-hotlist text:nth-child(2){
		font-size: 35rpx;
		margin-left: 30rpx;
		line-height: 50rpx;
		
	}
</style>
