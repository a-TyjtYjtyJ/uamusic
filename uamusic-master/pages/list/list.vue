<template>
	<view class="list">
		<view class="fixbg"></view>
		<musichead title="歌单" :icon="true"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<!-- 上面部分 -->
				<view class="list-head">
					<view class="list-head-img">
						<image src="../../static/logo.png" mode=""></image>
						<text class="iconfont">&#xe624; 30亿</text>
					</view>
					<view class="list-head-text">
						<view class="list-head-text-a">文字</view>
						<view class="list-head-text-b">
							<image src="../../static/logo.png" mode=""></image>文字
						</view>
						<view class="list-head-text-c">
							呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
						</view>
					</view>
				</view>
				<!-- 分享部分 -->
				<button class="list-share" open-type="share" type="default">
					<text class="iconfont">&#xe8b0; 分享好友</text>
				</button>
				<!-- 歌单详情底部 -->
				<view class="list-music">
					<view class="list-music-head">
						<text class="iconfont">&#xe624;</text>
						<text class="list-music-head-b">播放全部</text>
						<text class="list-music-head-c">(共100首)</text>
					</view>
					
					<view class="list-music-item">
						<view class="list-music-top">1</view>
						<view class="list-music-song">
							<view class="list-music-song-a">与我无关</view>
							<view class="list-music-song-b">
								<image src="../../static/logo.png" mode=""></image>
								<image src="../../static/logo.png" mode=""></image>
								歌手 - 歌曲名字
							</view>
						</view>
						<text class="iconfont">&#xe624;</text>
					</view>
					
					
				</view>
			</scroll-view>
		</view>
	</view>
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
		components: {
			musichead
		},
		methods: {

		}
	}
</script>

<style scoped>
	.list-head {
		display: flex;
		margin: 32rpx;

	}

	.list-head-img {
		width: 264rpx;
		height: 264rpx;
		border-radius: 20rpx;
		overflow: hidden;
		position: relative;
		margin-right: 42rpx;
	}

	.list-head-img image {
		width: 100%;
		height: 100%;
	}

	.list-head-img text {
		position: absolute;
		right: 8rpx;
		top: 8rpx;
		color: white;
		font-size: 25rpx;

	}

	.list-head-text {
		flex: 1;
		color: #ffaaff
	}

	.list-head-text-a {
		color: red;
		font-size: 34rpx;
	}

	.list-head-text-b {
		display: flex;
		margin: 20rpx 0rpx 20rpx 0;
		font-size: 24rpx;
		align-items: center;
	}

	.list-head-text view image {
		width: 54rpx;
		height: 54rpx;
		border-radius: 50%;
		margin-right: 15rpx;
	}

	.list-head-text-c {
		line-height: 32rpx;
		font-size: 22rpx;
	}

	.list-share {
		width: 400rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 32rpx;
		background-color: #d8d8d8;
		font-size: 28rpx;
	}

	.list-share text {
		margin-right: 16rpx;
	}

	.list-music {
		background-color: #dce1ff;
		border-radius: 50rpx;
		margin-top: 40rpx;
		overflow: hidden;
	}

	.list-music-head {
		height: 50rpx;
		margin: 30rpx 0 55rpx 22rpx;

	}

	.list-music-head text:nth-child(1) {
		height: 50rpx;
		font-size: 50rpx;
	}

	.list-music-head-b {
		font-size: 30rpx;
		margin: 0 10rpx 0 26rpx;

	}

	.list-music-head-c {
		font-size: 26rpx;
		color: #bcbcbc;
	}

	.list-music-item {
		display: flex;
				/* 上右下左 */
		margin: 0 32rpx 55rpx 35rpx;
		align-items: center;
		color: #959595;
	}

	.list-music-top {
		width: 58rpx;
		font-size: 50rpx;
		line-height: 50rpx;
	}

	.list-music-song {
		flex: 1;
	}

	.list-music-song-a {
font-size: 30rpx;
color: #000000;
	
	}

	.list-music-song-b {
		display: flex;
		font-size: 20rpx;
		align-items: center;
	}

	.list-music-song image {
		width: 32rpx;
		height: 20rpx;
		margin-right: 9rpx;
		
	}

	.list-music-item text {
		font-size: 45rpx;
	}
</style>
