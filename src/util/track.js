/* eslint-disable import/prefer-default-export */
import Taro from '@tarojs/taro'
import { parseUA } from './helper'
import { getItemFromStorage } from './storage'
import TrackUtil from './trackUtil'
import { ENV } from './../config/index'
import Raytheon from './raytheon'

const getTrackUrl = () => {
  console.log('NODE_ENV......', ENV)
  if (ENV === 'production') {
    return 'https://track-server-new.dianwoda.cn/i'
  } else {
    return 'https://track-server-qa2.dwbops.com/i'
  }
}

// 5分钟轮询埋点
const createTrack = () => {
  const runEnv = Raytheon.getEnv()
  console.log('Taro 222........', typeof Taro.getStorageSync, typeof Taro.getEnv)
  const dwdUser = JSON.parse(getItemFromStorage('user') || '{}').dwdUser
  console.log('dwdUser.......', dwdUser)
  const appName = {
    'WEAPP': 'raytheon-weapp',
    'SHOPAPP': 'raytheon-shop',
    'WECHATAPP': 'raytheon-wechat',
    'CNAPP': 'raytheon-cn',
    'OTHER': 'raytheon-other'
  }
  let appVersion = '-'
  let model = '-'
  let system = '-'
  let systemVersion = '-'
  switch(runEnv) {
    case 'WEAPP':
      const res = wx.getSystemInfoSync()
      const systemInfo = res.system.split(' ')
      appVersion = res.version
      model = res.model
      system = systemInfo[0]
      systemVersion = systemInfo[1]
      break;
    case 'SHOPAPP':
      appVersion = parseUA(navigator.userAgent).appVersion
      system = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? 'iOS' : 'Android'
      break;
    case 'WECHATAPP':
      break;
    case 'CNAPP':
      break;
    default:
      break;
  }
  const configs = {
    url: getTrackUrl(),
    options: {
      user_id: dwdUser ? dwdUser.id : '-',
      user_name: dwdUser ? dwdUser.username : '-',
      app_name: appName[runEnv],
      app_version: appVersion,
      device_model: model,
      os: system,
      os_version: systemVersion,
    },
    enable: true,
    interval: 2 * 60 * 1000,
  }
  return new TrackUtil(configs)
}

export const Track = createTrack()

// export default Track
