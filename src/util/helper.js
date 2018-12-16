import Taro from '@tarojs/taro'
import {insertItemToStorage, getItemFromStorage, deleteItemFromStorage} from './storage'

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

  const canPassThroughStatus = [200, 400, 503]
  if (canPassThroughStatus.indexOf(status) !== -1) {
    return resp
  }
  /** 状态401对应statusText是Unauthorized
   *  状态429对应的statusText是Too many request
   */
  const respText = await resp.text()
  const error = new Error(resp.statusText);
  error.dmSpecResp = respText
  throw error
}

export const checkRespStatus = async (resp) => {
  if (!resp.data.status) {
    const error = new Error(resp.statusText)
    error.dmSpecResp = resp.data.msg
    throw error
  }
  return resp
}

export const catchHttpError = (err, errMsg) => {
  const { dmSpecResp } = err
  if (!dmSpecResp) {
    // sentryExceptionRecord('FETCH捕捉到错误', 'common', {
    //   errMsg: err
    // })
    // 如果是捕获到这个错误，说明用户请求发生异常
    if (err.message === 'Failed to fetch') {
      const error = new Error('您的网络异常，请确认网络连接情况')
      error.dmSpecResp = '您的网络异常，请确认网络连接情况'
      throw error
    }
    throw new Error(err)
  }
  const error = new Error(dmSpecResp)
  error.dmSpecResp = dmSpecResp
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
