import Taro from '@tarojs/taro'
import {insertItemToStorage, getItemFromStorage, deleteItemFromStorage} from './storage'
import Raytheon from './raytheon'

/**
 * Cookie的增删改查
 * @param {*} key 键
 * @param {*} value 值
 * @param {*} expireDays 过期天数
 */
// 查
export const getCookie = (key) => {
  let value = ''
  if (document.cookie.length > 0) {
    const index = document.cookie.indexOf(`${key}=`)
    if (index >= 0) {
      const start = index + key.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end < 0) {
        end = document.cookie.length
      }
      value = document.cookie.substring(start, end)
    }
  }
  return value
}
// 增，改
export const setCookie = (key, value, expireDays) => {
  const expireDate = new Date()
  expireDate.setDate(expireDate.getDate() + expireDays)
  if (typeof expireDays !== 'undefined') {
    document.cookie = `${key}=${value};expires=${expireDate.toGMTString()}`
  } else {
    document.cookie = `${key}=${value};path=/`
  }
}
// 删
export const clearCookie = (key) => {
  setCookie(key, '', -1)
}

/**
 * 处理api url
 * @param {string} url  api
 * @param {object} data 入参
 */
export function buildURL(url, data) {
  return url.split('/').map((item) => {
    if (item.indexOf('$') === 0) {
      const key = item.slice(1)
      if (data[key] !== undefined) {
        const value = data[key]
        delete data[key]
        return value
      }
      return item
    }
    return item
  }).join('/')
}

export const serialize = (obj, prefix) => {
  const str = []
  let p = null
  /* eslint-disable */
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      let k = prefix ? `${prefix}[${p}]` : p,
        v = obj[p];
      str.push((v !== null && typeof v === 'object') ?
        serialize(v, k) :
        `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
    }
  }
  return str.join('&');
}

export function buildParams(obj) {
  if (!obj) {
    return ''
  }
  return serialize(obj)
}


export const checkHttpStatus = async (resp) => {
  /** 先检查响应的状态码, 与nodejs服务器约定好：
   * 200: 正常响应包括业务上执行出现正常错误和业务成功执行
   * 400: 客户端传参错误或者客户端传参缺少参数
   * 401: 客户端没有经过认证就访问页面
   * 429: 客户端请求太过频繁
   * 503: 服务器真的发生未知的错误，需要提示用户(因为运营商可能劫持500的响应错误，所以这里不使用500的错误在移动端)
   */
  const status = resp.statusCode

  // 身份校验失败，强制退出登录
  if (status === 401) {
    forceLogout()
  }

  const canPassThroughStatus = [200, 400, 503]
  if (canPassThroughStatus.indexOf(status) !== -1) {
    return resp
  }
  /** 状态401对应statusText是Unauthorized
   *  状态429对应的statusText是Too many request
   */
  const respText = await resp.text()
  const error = new Error(resp.statusText);
  error.dwdSpecResp = respText
  // sentryExceptionRecord('FETCH捕捉到429/401错误', 'common', {
  //   errMsg: respText
  // })
  throw error
}

export const checkRespResult = async (resp) => {
  /**
   * 因为我们保证到这个步骤的时候结果肯定是可以json化的
   */
  const respObj = await resp.json()
  /**
   * 响应的JSON格式是： {
   *  status: 0/1,
   *  code:  0 | 100 | 200 | ....,
   *  msg: 报错的信息
   *  data: 业务执行正常返回的数据
   * }
   * code的含义：
   * 0 标识成功
   * 100 标识java业务逻辑正常报错
   * 200 标识nodejs已知的业务错误
   * 300 标识java发生无法解析的错误(包括超时错误)
   * 400 标识nodejs未知的异常错误
   */
  // 所以我们先检查status是否是0，即是否是失败
  const infoRecordCode = [100, 200]
  if (typeof respObj === 'object' && !(respObj instanceof Array)) {
    if (!respObj.status && infoRecordCode.indexOf(respObj.code) !== -1) {
      // sentryInfoRecord('业务逻辑出错', 'common', {
      //   errMsg: respObj
      // })
      const error = new Error(resp.statusText)
      error.dwdSpecResp = respObj.msg
      throw error
    }
    if (respObj.status === 400) {
      // sentryInfoRecord('请求的参数错误', 'common', {
      //   errMsg: respObj
      // })
      const error = new Error(resp.statusText)
      error.dwdSpecResp = respObj.msg
      throw error
    }
    if (!respObj.status) {
      // sentryExceptionRecord('业务逻辑发生未知出错', 'common', {
      //   errMsg: respObj
      // })
      const error = new Error(resp.statusText)
      error.dwdSpecResp = respObj.msg
      throw error
    }
    return respObj.data
  }

  return respObj
}

export const checkRespStatus = async (resp) => {
  if (!resp.data.status) {
    const error = new Error(resp.statusText)
    error.dwdSpecResp = resp.data.message
    throw error
  }
  return resp
}

export const catchHttpError = (err, errMsg) => {
  const { dwdSpecResp } = err
  if (!dwdSpecResp) {
    // sentryExceptionRecord('FETCH捕捉到错误', 'common', {
    //   errMsg: err
    // })
    // 如果是捕获到这个错误，说明用户请求发生异常
    if (err.message === 'Failed to fetch') {
      const error = new Error('您的网络异常，请确认网络连接情况')
      error.dwdSpecResp = '您的网络异常，请确认网络连接情况'
      throw error
    }
    throw new Error(err)
  }
  const error = new Error(dwdSpecResp)
  error.dwdSpecResp = dwdSpecResp
  throw error
}

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * @param  {Date}       日期
 * @return {String}     字符串格式
 */
export const formatDate = (date, format) => {
  if (!date) {
    return date
  }

  if (typeof date === 'string') {
    const dateStr = date.replace(/-/g, '/')
    if (isNaN(new Date(dateStr).getTime())) {
      console.error('param [date] is not a valid date')
    } else {
      date = new Date(dateStr)
    }
  }

  if (!(date instanceof Date)) {
    console.error('param [date] is not a valid date')
    return date
  }

  let str = format;
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  if (/(Y+)/.test(format)) {
    str = str.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
  }

  for (const k in o) { // eslint-disable-line
    if (new RegExp(`(${k})`).test(format)) {
      str = str.replace(RegExp.$1, (RegExp.$1.length === 1) ? o[k] : (`00${o[k]}`.substr((o[k].toString()).length)));
    }
  }

  if (new RegExp('(w+)').test(format)) {
    str = str.replace(RegExp.$1, week[date.getDay()])
  }

  return str;
}

// 获得现在时间戳
const _now = Date.now || function () {
  return new Date().getTime();
}

/**
*
* @param fn {Function}   实际要执行的函数
* @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
*
* @return {Function}     返回一个“去弹跳”了的函数
*/
export const debounce = function (func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function () {
    const last = _now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function () {
    context = this;
    args = arguments;
    timestamp = _now();
    const callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};

/** 坑：Taro(0.0.59)循环渲染的自定义组件，卸载不会调componentWillUnmount,
 *  所以没办法清除定时器，只能存储在全局变量，待页面卸载的时候，再清除
 */
export const clearCountdownTimer = () => {
  const timers = Object.keys(global.countdownTimer)
  if (timers.length > 0) {
    timers.map(timer => clearTimeout(global.countdownTimer[timer]))
    global.countdownTimer = {}
  }
}



export const setMoneyText = (money) => {
  const moneyText = +money
  if ((moneyText * 100 % 10) === 0) {
    return moneyText.toFixed(1)
  } else {
    return moneyText.toFixed(2)
  }
}

// 微信获取当前加载的页面route
export const getCurrentPageRoute = () => {
  const pages = getCurrentPages()               //获取加载的页面
  const currentPage = pages[pages.length-1]     //获取当前页面的对象
  const url = currentPage.route                 //当前页面url
  return url
}

export const forceLogout = () => {
  const LOGIN_URL = 'pages/center/index'
  const HOME_URL = 'pages/home/index'
  const env = Raytheon.getEnv()
  const isWeApp = (env === 'WEAPP')
  if (!isWeApp && location.href.indexOf('pages/home/index') < 0 && location.hash) {
    Taro.showModal({
      title: '加载异常',
      content: '登录异常，请重新登录',
      confirmText: '我知道了',
      showCancel: false,
      confirmColor: '#fe751a',
    })
    .then(() => {
      insertItemToStorage('user','')
      insertItemToStorage('token','')
      Taro.redirectTo({ url: `/${LOGIN_URL}?entry=wechat` })
    })
    .catch((error) => {
      console.log(error)
    })
    return
  }
  const pages = getCurrentPages()

  if (getCurrentPageRoute() !== LOGIN_URL) { return }

  const index = pages.findIndex((page, index) => page.route === LOGIN_URL)

  if (index > 0 && getCurrentPageRoute() !== LOGIN_URL) {
    insertItemToStorage('user','')
    insertItemToStorage('token','')
    Taro.navigateBack({ delta: pages.length - index - 1 })
  } else if (index < 0) {
    Taro.redirectTo({ url: `/${LOGIN_URL}?entry=wechat` })
  }
}

// 跨天显示YYYY-MM-DD hh:mm， 当天显示hh:mm
export const formatCrossDate = (date) => {
  if (!date) return date
  const dateStr = date.replace(/-/g, '/')
  if (new Date(dateStr).toDateString() === new Date().toDateString()) {
    return formatDate(dateStr, 'hh:mm')
  } else {
    return formatDate(dateStr, 'YYYY-MM-DD hh:mm')
  }
}


export const setFormId = (id) => {
  const formIds = getItemFromStorage('formIds') || ''
  const newIds = formIds ? `${formIds},${id}` : id
  insertItemToStorage('formIds', newIds)
}
export const clearFormId = () => {
  deleteItemFromStorage('formIds')
}
export const getFormId = () => {
  const formIds = getItemFromStorage('formIds') || ''
  return formIds
}

//
export const getUrlQuery = (variable) => {
  console.log('location.href......', location.href)
  const url = location.href
  const searchArray = url.split('?')
  let query = {}
  searchArray.shift()
  // 菜鸟裹裹会修改url，添加?xxxx，所以修改该方法...
  searchArray.map(search => {
    if (search) {
      const searchItem = search.split("&");
      for (let i = 0; i < searchItem.length; i++) {
        const pair = searchItem[i].split("=")
        // if(pair[0] == variable) {return pair[1];}
        query[pair[0]] = pair[1]
      }
    }
  })
  return query
}

export const parseUA = (ua) => {

  let matches = ua.match(/userId\/\S+/ig)
  const userId =  matches ? matches[matches.length - 1].split('/')[1] : null // 若存在多个，以最后一次为准

  matches = ua.match(/token\/\S+/ig)
  const token = matches ? matches[matches.length - 1].split('/')[1] : null

  matches = ua.match(/cityid\/\S+/ig)
  const cityId = matches ? matches[matches.length - 1].split('/')[1] : null

  matches = ua.match(/sign\/\S+/ig)
  const sign = matches ? matches[matches.length - 1].split('/')[1] : null

  matches = ua.match(/platform\/\S+/ig)
  const platform = matches ? matches[matches.length - 1].split('/')[1] : null

  matches = ua.match(/AppVersion\/\S+/ig)
  const appVersion = matches ? matches[matches.length - 1].split('/')[1] : null

  matches = ua.match(/ShopApp\/\S+/ig)
  const shopApp = matches ? matches[matches.length - 1].split('/')[1] : null

  matches = ua.match(/LoginPhone\/\S+/ig)
  const loginPhone = matches ? matches[matches.length - 1].split('/')[1] : null

  return { userId, token, cityId, sign, platform, appVersion, shopApp, loginPhone }
}

/**
 * 解决通过https的文件资源,不允许访问http图片的兼容问题,去除协议头访问图片资源
 * @param {string} url
 */
export const formatImgUrl = (url) => {
  if (!url) return ''
  return url.replace(/http(s)?:/, '')
}

export const getLoginSide = () => {
  // {
  //   0: '点我达商家APP登录',
  //   1: '微信小程序登录',
  //   2: '普通H5登录',
  //   3: '菜鸟H5登录',
  //   4: '微信H5登录'
  // }
  const loginSideMap = {
    'SHOPAPP' : 0,
    'WEAPP' : 1,
    'OTHER' : 2,
    'CNAPP' : 3,
    'WECHATAPP' : 4,
  }
  return loginSideMap[Raytheon.getEnv()]
}

export const backToUrl = (delta = 1, url) => {
  const ENV = Raytheon.getEnv()
  if (url && ENV !== 'WEAPP') {
    Taro.navigateTo({ url })
    return
  }
  switch(ENV) {
    case 'WEAPP':
      Taro.navigateBack({ delta })
      break;
    case 'CNAPP':
      break;
    default:
      window.history.back(-delta)
      break;
  }
}
