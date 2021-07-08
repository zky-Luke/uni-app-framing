import Vue from 'vue'
const state = {
  userInfo: {}, // 用户信息
  experience: false // 体验者模式
}

const mutations = {
  SET_USER_INFO: (state, params) => {
    state.userInfo = params;
  },

  SET_EXPERIENCE: (state, bol) => {
    state.experience = bol
    // console.log('state.experience',state.experience)
  }
}

const actions = {
  // 微信登录
  async wxUserLogin({ commit, dispatch }) {
    return new Promise(async (resolve) => {
      // 获取用户信息
    });
  },

  // 获取用户信息
  getUserInfo ({ commit, dispatch }) {
    return new Promise(async (resolve) => {
    })
  },

  // 退出登录
  logout({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      uni.clearStorageSync()
      resolve()
    })
  }
}

const getters = {
  userInfo: state => state.userInfo,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
