import request from '../util/ajax'

// 计算费用
export const postOrderChargeAPI = request('/placeorder/charge', 'POST')

// 下单
export const postOrderPlaceAPI = request('/placeorder/place', 'POST')

// 获取支付参数
export const getOrderPayAPI = request('/placeorder/pay')

