/**
 * 可选的配置参数
 * @param baseUrl {String} 请求的本域名
 * @param method {String} 请求方法
 * @param dataType {String} 设置为json，返回后会对数据进行一次JSON.parse()
 * @param showLoading {Boolean} 是否显示请求中的loading
 * @param loadingText {String} 请求loading中的文字提示
 * @param loadingTime {Number} 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
 * @param originalData {Boolean} 是否在拦截器中返回服务端的原始数据
 * @param loadingMask {Boolean} 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
 * @param header {String} 配置请求头信息 例：header: {'content-type': 'application/json;charset=UTF-8'}
 */

const dictionarySelect = {
    url: '/API/Dictionary/select',
    method: 'post'
}

// 默认全部倒出
export default {
    dictionarySelect
};
