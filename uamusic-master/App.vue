<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	.container{
		width: 100%;
		height:calc(100vh - 70px);
		overflow: hidden;
	}
	.container scroll-view{
		height: 100%;
	}
	.fixbg{
		/* background-image: url(static/wyy.png); */
		width: 100%;
		height: 100%;
		position: fixed;
		background-size: cover;
		background-position: center;
		filter: blur(10rpx);
		transform: scale(1.2);
	}
</style>
