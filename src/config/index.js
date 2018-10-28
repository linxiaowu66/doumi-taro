import Taro from '@tarojs/taro'
// const getLocalIp = require('./ip')
const ENV = process.env.NODE_ENV || 'development'
const isWeApp = Taro.getEnv() === 'WEAPP'
const isWeb = Taro.getEnv() === 'WEB'
const isShopApp = isWeb && navigator.userAgent.toLowerCase().indexOf('shopapp') > -1
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

function getSentryConfig() {
  return { development: false, qa: true, production: true }[ENV]
}

function getAliOssConfig() {
  const bucket = {}
  bucket.development = 'devdwbbucket'
  bucket.qa = 'testdwbbucket'
  bucket.qa1 = 'testdwbbucket'
  bucket.production = 'prodwbbucket'

  return {
    accessKeyId: 'LTAIEoTr6e2FrAds',
    accessKeySecret: 'VszQsT02YgoHhXgZYqxdSaiKk5JVTO',
    bucket: bucket[ENV],
    region: 'oss-cn-hangzhou'
  }
}

/* 图片或文件上传/下载，获取oss相关信息 */
function getOssPolicyAddr() {
  return {
    development: 'https://assets.dianwoda.cn/raytheon/qa1/images',
    qa: 'https://assets.dianwoda.cn/raytheon/qa/images',
    qa1: 'https://assets.dianwoda.cn/raytheon/qa1/images',
    qa2: 'https://assets.dianwoda.cn/raytheon/qa2/images',
    qa2: 'https://assets.dianwoda.cn/raytheon/qa3/images',
    production: 'https://assets.dianwoda.cn/raytheon/prod/images',
    // production: 'http://m.dianwoba.com/blink-bff' // 'http://sts.dianwoda.cn'
  }[ENV]
}

/* 获取前端入口页面地址 */
function getEntryPageAddr() {
  return {
    development: `http://${process.env.IP}:8086/#/`,
    qa: 'https://assets.dianwoda.cn/raytheon/qa/index.html#/',
    qa1: 'https://raytheon-qa1.dianwoda.cn/#/',
    qa2: 'https://assets.dianwoda.cn/raytheon/qa2/index.html#/',
    qa3: 'https://raytheon-qa3.dianwoda.cn/#/',
    production: 'https://raytheon.dianwoda.cn/#/',
  }[ENV]
}

/* 获取网关地址 */
function getGatewayAddr() {
  return {
    // development: `http://${process.env.IP}:13950`,
    development: 'https://raytheon-bff-qa1.dwbops.com',
    qa: 'https://raytheon-bff-qa.dwbops.com',
    qa1: 'https://raytheon-bff-qa1.dwbops.com',
    qa2: 'https://raytheon-bff-qa2.dwbops.com',
    qa3: 'https://raytheon-bff-qa3.dwbops.com',
    production: 'https://raytheon-bff.dianwoda.com',
  }[ENV]
}

/* 获取网关地址 */
function allH5RouteIp() {
  return {
    orderTrace: {
      development: '192.168.101.247:3001',
      qa: 'http://192.168.11.39:35380',
      qa1: 'https://order-trace-h5-qa1-ex.dwbops.com',
      qa2: 'http://116.62.172.151:35382',
      qa3: 'http://116.62.172.151:35383',
      pre: 'https://h5.dianwoda.cn',
      production: 'https://h5.dianwoda.cn',
    },
  }
}


function getAssetsCDN() {
  return {
    host: '//assets.dianwoda.cn',
    path: 'blink-dingtalk',
    pathqa: 'blink-dingtalk',
  }
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
  aliOss: getAliOssConfig(),
  enableSentryLog: getSentryConfig(),
  ossPolicyAddr: getOssPolicyAddr(),
  gatewayAddr: getGatewayAddr(),
  assetsCDN: getAssetsCDN(),
  testOnRealWeiXinEnv: testOnRealWeixinEnv(),
  entryPageAddr: getEntryPageAddr(),
  allH5RouteIp: allH5RouteIp(),
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
