import Taro from '@tarojs/taro'
import {
  checkHttpStatus,
  checkRespStatus,
} from './helper'
import {
  // insertItemToStorage,
  // getItemFromStorage
} from './storage'
import config from '../config/index'

// const apiVersion = 'v1'


function createBaseParams(method) {
  // console.log('platform', platform)
  let header = {
    'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8',
  }
  // 微信小程序需要手动设置cookie
  if (config.isWeApp) {
    header = {
      ...header,
      'Cookie': '',
    }
  }
  const params = {
    method: method || 'GET',
    header,
    credentials: 'include'
  }
  return params
}

const request = (url, method) => query => new Promise((resolve, reject) => {
  const preApi = config.gatewayAddr
  // console.log(method, url, query, { ...createBaseParams(method) }, preApi)
  const urlReal = url.indexOf('http') > -1 ? url : `${preApi}/api${url}`
  const reg = /http(s)?:/
  let getQuery = '?'
  if (query) {
    // eslint-disable-next-line
    for (let name in query) {
      let value = query[name]
      // 值为url
      if (reg.test(value)){
        value = encodeURIComponent(value)
      }
      getQuery += `${name}=${value}&`;
    }
  }
  const getUrl = urlReal + (query ? getQuery.substring(0, getQuery.length - 1) : '');
  // H5：GET请求，参数放在data字段无效，需要拼接url，且safari浏览器不能存在data字段，会报错，
  // 所以为统一weapp和h5请求API, GET请求都采用url拼接方式，POST请求传data
  let requestParams = {
    url: getUrl,
    ...createBaseParams(method),
  }
  if (method === 'POST') {
    requestParams = {
      ...requestParams,
      data: getQuery.slice(1, -1)
    }
  }
  Taro.request(requestParams)
  .then(async (resp) => {
    const res = await checkHttpStatus(resp)
    // const cookie = resp.header['set-cookie'] || resp.header['Set-Cookie']
    console.log(res)
    const result = res.data
    await checkRespStatus(res)
    resolve(result)
  })
  .catch((err) => {
    reject(err)
  })
})

export default request
