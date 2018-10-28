import request from '../util/ajax'

// 计费规则
export const getOrderRuleAPI = request('/placeorder/rule')

// 获取周边骑手
export const getNearbyRidersAPI = request('/placeorder/riders')

// 获取openId
export const getOpenIdAPI = request('/auth/openId')

// 获取banner
export const getBannerAPI = request('/common/banner')

// 历史地址
export const getHistoryAddrListAPI = request('/common/address/history')

// 最近地址
export const getNearbyHistoryAddrAPI = request('/common/address/nearest')

// 获取首页优惠券
export const getAutoCouponApi = request('/coupon/pushCoupon')

// 免登调用
// export const

