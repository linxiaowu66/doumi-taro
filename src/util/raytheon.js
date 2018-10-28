/* eslint-disable no-undef */
import Cainiao from './runtime/cainiao'
import Dianwoda from './runtime/dianwoda'

class Raytheon {
  constructor(configs) {
    console.log('configs......', configs)
  }

  getEnv() {
    if (typeof wx !== 'undefined' && wx.getSystemInfo) {
      return 'WEAPP';
    }
  
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent.toLowerCase()
      // 商家app
      if (!!ua.match(/shopapp/i)) {
        return 'SHOPAPP'
      }
      // 微信浏览器或微信开发者工具
      if (!!ua.match(/micromessenger/i)) {
        return 'WECHATAPP'
      }
      // 菜鸟裹裹
      if (typeof terra !== 'undefined' && terra.isCN) {
        return 'CNAPP'
      }
      // 菜鸟裹裹 手淘之类的
      // if (!!ua.match(/AliApp/i)) {
      //   return 'AliPP'
      // }
      return 'OTHER'
    }
    return 'CNAPP'
  }

  mount() {
    const env = this.getEnv()
    console.log('env.....', env)
    if (env === 'SHOPAPP') {
      this.exportApis = new Dianwoda()
    } else if (env === 'CNAPP') {
      this.exportApis = new Cainiao()
    }
  }
}

// export default RaytheonClass

export default new Raytheon()