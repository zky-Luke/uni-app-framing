<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/* common.scss - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/common.scss';

	page{
		height: 100%;
		// opacity: 0.3;
	}

</style>
