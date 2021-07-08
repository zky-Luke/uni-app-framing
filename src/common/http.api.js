let apiModules = {}

const storeContext = require.context('@/api', true, /\.js$/)
// console.log(storeContext)
storeContext.keys().forEach(modules => {
  let key = modules.replace(/(^\.\/)|(\.js$)/g, '')
  apiModules = {
    ...apiModules,
    [key]: storeContext(modules).default || {}
  }
  // console.log('modules')
  // console.log(modules.replace(/(^\.\/)|(\.js$)/g, ''))
  // console.log(storeContext(modules).default)
})

// api模块
const registerModule = (apiModules, vm) => {
  return Object.keys(apiModules).reduce((pre, cur) => {
    return {
      ...pre,
      [cur]: registerInterface(apiModules[cur], vm)
    }
  }, {})
}

// api接口
const registerInterface = (apiData, vm) => {
  return Object.keys(apiData).reduce((pre, cur) => {
    let config = Object.assign({header: {}}, apiData[cur])
    // console.log('config', config)
    return {
      ...pre,
      // [cur]: (params = {}) => vm.$u[config.method](config.url, params, config.headers)
      [cur]: (data = {}) => vm.$u.axios.request({data, ...config})
    }
  }, {})
}

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {

  let apiList = registerModule(apiModules, vm)
  console.log('apiList', apiList)
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = apiList;
}

export default {
	install
}