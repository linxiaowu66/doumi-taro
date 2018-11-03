import Taro from '@tarojs/taro'
// const getLocalIp = require('./ip')
const ENV = process.env.NODE_ENV || 'development'
const isWeApp = Taro.getEnv() === 'WEAPP'
const isWeb = Taro.getEnv() === 'WEB'
const isAndroid = isWeb && (navigator.userAgent.toLowerCase().indexOf('android') > -1 || navigator.userAgent.indexOf('Adr') > -1)
const isIpx = isWeApp ? (wx.getSystemInfoSync().model.indexOf('iPhone X') > -1) : (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && screen.height === 812)
const isIos8 = !isWeApp && navigator.userAgent.toLowerCase().match(/os 8/i)
const isAndroidLow = !isWeApp && get_android_version() === '5.1.1'
// const qqMapKey = 'WZBBZ-DDP6G-YHNQK-IYUJX-TI3GZ-YXF2Y'
const qqMapKey = ENV === 'development' ? 'DZYBZ-73WWI-FG6GZ-5JRFR-PNVIE-4OFUL' : 'DRFBZ-K6UWI-HEKGY-57ZZU-63EH5-HMFGO'
const AMapKey = 'a5ebc730f80db3b1375a691afad00942'

function get_android_version() {
  const ua = navigator.userAgent.toLowerCase();
  let version = null;
  if (ua.indexOf("android") > 0) {
      const reg = /android [\d._]+/gi;
      const v_info = ua.match(reg);
      version = (v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, "."); //得到版本号4.2.2
      // version = parseInt(version.split('.')[0]);// 得到版本号第一位
  }
  return version;
}

function getHost() {
  return {
    development: `${process.env.IP}`,
    // development: '127.0.0.1',
    qa: '0.0.0.0',
    qa1: '0.0.0.0',
    production: '0.0.0.0',
  }[ENV]
}

function getPort() {
  return { development: 9100 }[ENV]
}


function testOnRealWeixinEnv() {
  return {
    localdev: true, development: false, qa: true, production: true, qa2: true
  }[ENV]
}

//判断是否微信登陆
function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
  } else {
      return false;
  }
}

module.exports = {
  port: getPort(),
  host: getHost(),
  testOnRealWeiXinEnv: testOnRealWeixinEnv(),
  entryPageAddr: getEntryPageAddr(),
  ENV,
  qqMapKey,
  AMapKey,
  // 运行环境判断
  isWeApp,
  isWeb,
  isShopApp,
  isIpx,
  isWeiXin,
  isAndroid,
  isAndroidLow
}
