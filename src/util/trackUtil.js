/**
 * 大数据埋点
 * TODO: 尽量减少业务逻辑，后期优化成私有node包
 */
import Taro from '@tarojs/taro'
import { insertItemToStorage, getItemFromStorage, deleteItemFromStorage } from './storage'

const STORAGE_KEY = 'track_logs'
// 坑：Taro不支持new FormData，只能手动拼接了
const BOUNDARY_KEY = 'raytheon_boundary'

class Track {
  constructor(configs) {
    this.defaultParams = {
      event: '',                            // 事件属性名
      app_name: 'raytheon',                 // 应用名称
      app_version: '-',                     // 应用版本
      sdk_version: '-',                     //
      channel: '-',                         // 发布app的渠道标识
      brand: '-',                           // 厂商
      device_model: '-',                    // 设备型号名称
      resolution: '-',                      // 分辨率 如1920*1080
      carrier: '-',                         // 运营商
      access: '-',                          // 2G/3G/4G/Wifi
      os: '-',                              // 操作系统 ,Android，iOS
      os_version: '-',                      // 操作系统版本
      user_id: '-',                         // 如果用户不强制退出,尽量带上这两个数据
      user_name: '-',                       // 如果用户不强制退出,尽量带上这两个数据
      ifa: '-',                             // 唯一标识一台设备,1.ios取idfa 2.android, 先取googleadid,没有取androidid
      imei: '-',                            //
      imsi: '-',                            // 国际移动用户唯⼀标识, http://baike.baidu.com/view/715091.htm
      timestamp: new Date().getTime(),      // 本地时间戳 long
      longitude: '-',                       // 经度 int类型
      latitude: '-',                        // 纬度 int类型
      args: {                               // 参数,json格式,尽量不要换行.. 样式  {"orderId":xxx,"status":""}
        description: '前端埋点'
      }
    },
    this.options = configs.options || {}                      // 参数
    this.url = configs.url || 'https://track.dianwoda.cn/i'    // 日志服务器url
    this.enable = configs.enable || true                      // 是否开启日志记录
    this.interval = configs.interval || 60000                 // 上传日志时间间隔
    this.logs = ''
  }

  // 开始埋点
  start = () => {
    const that = this
    that.track()
    setInterval(() => {
      that.track()
    }, this.interval)
  }

  track = () => {
    console.log('开始埋点......')
    // 本地缓存中的日志信息
    const logStorage = this.getItem() || []
    // 日志字符串拼接
    const logStr = logStorage.toString().replace(/\,/g, '')
    // 日志为空，不发送请求
    if (logStr.length === 0) return
    // const data = new FormData()
    // data.append('upload', logStr)
    const boundary_start = `------${BOUNDARY_KEY}`
    const boundary_end = `\r\n------${BOUNDARY_KEY}--`
    const data = `${boundary_start}\r\nContent-Disposition: form-data; name="upload"\r\n\r\n${logStr}\r\n${boundary_end}`
    // console.log('form data.....')
    // console.log(data)
    if (this.enable) {
      // console.log('logStr.......', logStr)
      Taro.request({
        url: this.url,
        method: 'POST',
        header: {
          'Content-Type':  `multipart/form-data; boundary=----${BOUNDARY_KEY}`,
        },
        data
      }).then(async (resp) => {
        console.log('track resp:', resp)
        this.clear()
      })
      .catch((err) => {
        console.log('track error:', err)
      })
    }
  }

  /**
   * 添加一条日志
   * @param event {string} 事件id
   * @param extra {string | object} 如果为字符串，则默认指代[事件的中文名]，否则默认指代[日志所需的额外参数]
   */
  setItem = (event, extra) => {
    try {
      const args = typeof extra === 'string' ? { args: { description: extra } } : extra
      const params = { ...this.defaultParams, ...this.options, event, args, timestamp: new Date().getTime() }
      const logStr = this.format(params)
      const logs = getItemFromStorage(STORAGE_KEY) || []
      logs.push(logStr)
      insertItemToStorage(STORAGE_KEY, logs)
    } catch(e) {
      console.log('track setItem error:', e)
    }
  }

  getItem = () => {
    return getItemFromStorage(STORAGE_KEY)
  }

  clear = () => {
    return deleteItemFromStorage(STORAGE_KEY)
  }

  format = (params) => {
    let result = ''
    for (const key in params) {
      if (key !== 'args') {
        result += `${params[key]}\u0001`
      }
    }
    result = `${result}${JSON.stringify(params.args)}\n`
    return result
  }
}

// export const createTrack = (configs) => {
//   return new Track(configs)
// }

export default Track
