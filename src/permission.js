import Vue from 'vue';
import store from '@/store'
import $Router from '@/utils/router';

Vue.prototype.$Router = $Router;

// 路由导航
let whiteList = ['/pages/home/home']
$Router.beforeEach((navType, options) => {
  if (store.state.user.experience) {
    if (whiteList.includes(options.url)) {
      uni[navType](options);
    } else {
      Vue.prototype.$u.toast('暂时没有权限喔~')
    }
  } else {
    uni[navType](options);
  }
  console.log(navType, options);
})