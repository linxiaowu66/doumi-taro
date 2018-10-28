import request from '../util/ajax'

export const getCouponAll = request(`/coupon/all`)

export const getOrderCouponList = request('/coupon/available', 'POST')
export const getRechargeCouponList = request('/coupon/recharge', 'POST')
export const fetchAvailableCouponListAPI = request(`/promotion/coupon/available`)
export const receiveCouponAPI = request(`/promotion/coupon/pullAll`, 'POST')
export const commitShareResultAPI = request(`/promotion/coupon/shareAdd`, 'POST')