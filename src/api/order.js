/*eslint-disable import/prefer-default-export */
import request from '../util/ajax'

export const processOrderListAPI = request('/order/list/progress')
export const historyOrderListAPI = request('/order/list/history')
export const orderDetailAPI = request('/order/detail')
export const cancelOrderAPI = request('/order/cancel', 'POST')
export const orderDeductAPI = request('/order/deduct', 'POST')
export const submitRiderCommentsAPI = request('/order/rider/comments/submit', 'POST')
export const orderCommentAPI = request('/order/rider/comment/view')
