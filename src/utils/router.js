/*
 * 路由对象
 * 中心思想：需要路由鉴权,由于uni-app没有vue中的全局钩子函数，所以封装了Router对象。
 * 说明：应用中的路由跳转尽量使用该Router的方法，并配合config中的路由表对象进行跳转。
 *
 * 示例：this.$Router.navigateTo({url: 'test?id=1&name=uniapp'})
 *
 */
class Router {
	constructor() {
		this.callBack = () => {};
	}

	beforeEach(callBack) {
		if (callBack instanceof Function) this.callBack = callBack;
	}

	navigateTo(options) {
		this.callBack('navigateTo', options);
	}

	redirectTo(options) {
		this.callBack('redirectTo', options);
	}

	reLaunch(options) {
		this.callBack('reLaunch', options);
	}

	switchTab(options) {
		this.callBack('switchTab', options);
	}

	navigateBack(delta) {
		// #ifdef H5
		history.back();
		// #endif
		// #ifndef H5
		uni.navigateBack({
			delta
		});
		// #endif
	}
}

export default new Router();
