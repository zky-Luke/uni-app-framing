<template>
	<view>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30 u-p-t-30">
			<view class="u-m-r-10">
				<u-avatar :src="wxUserInfo.avatarUrl || pic" size="140"></u-avatar>
			</view>
			<view class="u-flex-1 u-p-l-20">
				<view class="u-font-18 u-p-b-20">{{wxUserInfo.nickName || '--'}}</view>
				<view class="u-font-14 u-tips-color">地区: {{wxUserInfo.city || '--'}}</view>
			</view>
			<!-- <view class="u-m-l-10 u-p-10">
				<u-icon name="scan" color="#969799" size="28"></u-icon>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view> -->
		</view>
		 <view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="minus-circle" title="退出登录" @click="logoutHandle()"></u-cell-item>
			</u-cell-group>
		</view>
		<!--<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="star" title="收藏"></u-cell-item>
				<u-cell-item icon="photo" title="相册"></u-cell-item>
				<u-cell-item icon="coupon" title="卡券"></u-cell-item>
				<u-cell-item icon="heart" title="关注"></u-cell-item>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="设置"></u-cell-item>
			</u-cell-group>
		</view> -->

		<u-modal v-model="logoutShow" :show-cancel-button="true" content="您是否要退出登录？" @confirm="confirmHanlde"></u-modal>
	</view>
</template>

<script>
export default {
  data() {
    return {
			pic: '',
			logoutShow: false // 弹框
    };
  },

  computed: {
    wxUserInfo () {
			return uni.getStorageSync('SET_WX_USER_INFO')
		}
  },

  onLoad() {},
  methods: {
		async logoutHandle (index) {
			this.logoutShow = true
		},

		async confirmHanlde () {
			// this.$Router.reLaunch({url: '/pages/public/authorize'})
		}
	}
};
</script>

<style lang="scss">
page {
  background-color: #ededed;
}

.user-box {
  background-color: #fff;
}
</style>
