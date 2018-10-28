import request from '../util/ajax'

export const getOpenId = request(`/auth/openId`)

export const getLoginCaptchaAPI = request('/auth/captcha')

export const fetchLogin = request('/auth/dwd', 'POST')


export const validateToken = request(`/auth/token/validate`, 'POST')

export const updateUserMobileAPI = request(`/auth/mobile`, 'POST')
export const updateUserNameAPI = request(`/auth/name`, 'POST')

export const fetchInviteRegister = request('/auth/inviteRegister', 'POST')

// 免登调用
export const refereshLogin = request('/auth/refreshlogin')

// 裹裹验证
export const verifyCNAPI = request('/auth/dwdcn')

// h5分享页跳转免登
export const h5ShareNoAuthApi = request('/auth/h5NoAuth')
// 更新图片验证码
export const getPicCaptchaAPI = request('/auth/picCaptcha')
