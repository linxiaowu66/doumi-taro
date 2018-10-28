/*eslint-disable import/prefer-default-export */
import request from '../util/ajax'

export const wechatPaymentAPI = request('/common/wechat/payment')

export const getWechatSignatureAPI = request('/auth/signature', 'POST')

// 获取开通城市
export const getOpenCityAPI = request('/common/opencity')
// H5多平台支付
export const platformPaymentAPI = request('/common/platform/payment')
// 获取微信openId
export const getOpenIdAPI = request('/common/wechat/openid')

// 获取微信authorize地址
export const getAuthroizeUrl = request('/common/wechat/authroize')
