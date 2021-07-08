import Vue from 'vue'
import App from './App'
import store from './store'
// 引入uView
import uView from 'uview-ui'

// 引入全局方法
import '@/permission'

Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(uView)

const app = new Vue({
	store,
    ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()
