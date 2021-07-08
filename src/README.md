# uni-app-framing

安装依赖包：npm install

浏览器H5启动: yarn serve
微信开发者工具启动: yarn dev:mp-weixin
浏览器H5打包：yarn build
微信小程序打包：yarn build:mp-weixin

更新包： 运行yarn dev:mp-weixin后，改动代码，然后点击开发者工具上传按钮，便可上传开发版

项目目录：
api: 接口目录
common: 公共文件（公共样式、 请求封装、 公用方法）
components： 公共组件 （可引入uniapp组件）
pages: 界面
static：静态文件
store：Vuex状态管理
utils: 功能函数
pages.json：小程序配置文件
permission：路由守卫（路由跳转用utils/router.js封装好的方法）
uni.scss: scss样式


技术栈： uniapp  (官方文档 - https://uniapp.dcloud.io/)
		 uView（官方文档 - http://uviewui.com/components/intro.html）
