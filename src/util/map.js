/* eslint-disable no-unused-vars, no-undef */
import Taro from '@tarojs/taro'
import { qqMapKey, isWeApp, AMapKey } from '../config/index'
import QQMapWX from '../assets/qqmap-wx-jssdk'

export const mapSDK = new QQMapWX({
  key: qqMapKey // 'WZBBZ-DDP6G-YHNQK-IYUJX-TI3GZ-YXF2Y'
})
// export const mapSDK = new QQMapWX({
//   key: 'DZYBZ-73WWI-FG6GZ-5JRFR-PNVIE-4OFUL' // 'WZBBZ-DDP6G-YHNQK-IYUJX-TI3GZ-YXF2Y'
// })

export const amapsdk = ''

/**
 * 根据指定的起点及终点，获取腾讯地图推荐路线经纬度坐标数组
 * @param {object} points , { fromLat: 30.324359, fromLng: 120.142531, toLat: 30.303130000000007, toLng: 120.14600999999999 }
 * @return {array} pathPoints [{ latitude: 30.324359, longitude: 120.142531 }, { latitude: 30.324359, longitude: 120.142531 }]
 */
export const getQQmapSearchRidingRoute = async (points) => {
  const { fromLat, fromLng, toLat, toLng } = points
  let pathPoints = []
  const res = await Taro.request({
    url: 'https://apis.map.qq.com/ws/direction/v1/walking',
    data: {
      from: `${fromLat},${fromLng}`,
      to: `${toLat},${toLng}`,
      output: 'json',
      key: qqMapKey //qqMapKey
    }
  })
  if (!res.data.result) return []
  const coors = res.data.result.routes[0].polyline
  for(var i=2; i< coors.length; i++) {
    coors[i]= coors[i-2]+ coors[i] / 1000000
  }
  for(var i = 0; i < coors.length; i = i + 2) {
    pathPoints[i/2] = { latitude: coors[i], longitude: coors[i+1] }
  }
  return pathPoints
}

export const nearbyAddr = (params, cb) => {
  isWeApp ? getQQMapNearbyAddr(params, cb) : getAMapNearbyAddr(params, cb)
}

export const getGeolocation = async (cb, errcb) => {
  switch(isWeApp) {
    case true:
      await Taro.getLocation({
        type: 'gcj02',  // 火星坐标，支持腾讯、google、高德坐标
        altitude: false,
        success: function(res) {
          console.log('location...', res)
          typeof cb === 'function' && cb(res)
        }
      })
      break;
    default:
      await AMap.plugin(['AMap.Geolocation'], async () => {
        const geolocation = new AMap.Geolocation()
        geolocation.getCurrentPosition()
        await AMap.event.addListener(geolocation, 'complete', (res) => {
          console.log('定位成功:', res)
          const ret = {
            latitude: res.position.lat,
            longitude: res.position.lng,
          }
          typeof cb === 'function' && cb(ret, res)
        })
        await AMap.event.addListener(geolocation, 'error', (res) => {
          console.log('定位失败:', res.message)
          typeof cb === 'function' && errcb()
        })
      })
  }
}

/**
 * 小程序获取附近地址
 * @param {object} params 入参
 * @param {function} success 成功回调
 * @param {function} error 失败回调
 * @return {object} list 周边地址列表
 */
async function getQQMapNearbyAddr(params, success, fail) {
  const { latitude, longitude, radius } = params

  mapSDK.reverseGeocoder({
    location: {
      latitude,
      longitude
    },
    coord_type: 5,
    get_poi: 1,
    poi_options: `radius=${radius}`,
    success: function(resp) {
      if (resp) {
        const pois = resp.result.pois || []
        const poisSort = pois.sort((a, b) => a._distance - b._distance)
        typeof success === 'function' && success(poisSort)
      }
    },
    fail: function(resp) {
      console.log(resp);
      typeof fail === 'function' && fail(resp)
    },
    complete: function(resp) {
        console.log(resp);
    }
  })

}

/**
 * @description 获取周边地址: 先定位当前城市
 * @param {string} key 搜索关键字
 * @param {number} radius 搜索半径
 * @param {string} type 搜索类型-与高德地图一致
 * @param {function} success 成功回调
 * @param {function} error 失败回调
 * @return {object} data 当前位置
 * @return {object} list 周边地址列表
 */
async function getAMapNearbyAddr(params, success) {
  const { key, radius, cityName, longitude, latitude } = params
  await AMap.service(['AMap.PlaceSearch'], async () => {
      // 构造地点查询类
    const placeSearch = new AMap.PlaceSearch({
      city: cityName,
      pageSize: 10,
      pageIndex: 1,
      type: '餐饮服务|购物服务|生活服务|商务住宅|政府机构及社会团体|科教文化服务|交通设施服务|公司企业|地名地址信息|金融保险服务',
      sortrule: 'distance',
    });
      // 中心点坐标
    const centerPoint = [longitude, latitude]

   await placeSearch.searchNearBy(key, centerPoint, radius, async (status, result) => {
      let list = []
      if (status === 'complete' && result.info === 'OK') {
        list = result.poiList.pois
      } else {
        list = []
      }
      const poisSort = list.sort((a, b) => a.distance - b.distance)
      await typeof success === 'function' && success(poisSort)
    });
  });
}

/**
 * @description 高德逆地理编码
 * @param {object} location 经纬度
 */
export const regeocoder = (location, cb) => {
  AMap.plugin('AMap.Geocoder', function() {
    var geocoder = new AMap.Geocoder({
      radius: 100,
      extensions: "all"
    })
    var lnglat = [116.396574, 39.992706]
    geocoder.getAddress(location, function(status, result) {
      if (status === 'complete' && result.info === 'OK') {
        typeof cb === 'function' && cb(result.regeocode)
      }
    });
  })

}


/**
 * @description 关键词搜索
 * @param {string} key 搜索关键字
 * @param {string} cityName 搜索的城市范围
 * @param {string} type 搜索类型-与高德地图一致
 */
export const searchAddrByKey = (params, success, fail) => {
  const { keyword, cityName, location } = params
  switch (isWeApp) {
    case true:
      mapSDK.getSuggestion({
        keyword,
        region: cityName,
        policy: 1,
        region_fix: 1,
        success: (res) => {
          typeof success === 'function' && success(res.data)
        },
        fail: function(res) {
          typeof fail === 'function' && fail(res)
        }
      })
      break;
    default:
      // 搜索地址, 由于需要类似提示的效果，所以使用Autocomplete
      AMap.service(['AMap.Autocomplete'], () => {
        // 构造地点查询类
      const placeSearch = new AMap.Autocomplete({
        city: cityName,
        citylimit: true,
        // pageSize: 10,
        // pageIndex: 1,
        type: '汽车服务|餐饮服务|购物服务|生活服务|体育休闲服务|医疗保健服务|住宿服务|商务住宅|政府机构及社会团体|科教文化服务|交通设施服务|公司企业|地名地址信息|汽车销售|汽车维修|摩托车服务|金融保险服务',
      });

      placeSearch.search(keyword, (status, result) => {
        let list = []
        if (status === 'complete' && result.info === 'OK') {
          // 过滤没有经纬度地址
          list = (result.tips || []).filter(el => !!el.location)
          typeof success === 'function' && success(list)
        } else {
          list = []
          typeof fail === 'function' && fail(list)
        }
      });
    });
  }
}


/**
 * 调用腾讯地图API计算两点间的距离
 * @param {object} points , { fromLat: 30.324359, fromLng: 120.142531, toLat: 30.303130000000007, toLng: 120.14600999999999 }
 */
export const getQQmapRidingDistance = (points) => {
  const { fromLat, fromLng, toLat, toLng } = points
  return new Promise((resolve) => {
    mapSDK.calculateDistance({
      mode: 'walking',
      from: {
        latitude: fromLat,
        longitude: fromLng
      },
      to: [{
        latitude: toLat,
        longitude: toLng
      }],
      success: function(res) {
        resolve({
          distance: res.status === 0 ? res.result.elements[0].distance : calculateDistance(points),
        })
      },
      fail: function(res) {
        resolve({
          distance: res.status === 0 ? res.result.elements[0].distance : calculateDistance(points),
        })
      },
      complete: function(res) {
        resolve({
          distance: res.status === 0 ? res.result.elements[0].distance : calculateDistance(points),
        })
      }
    })
  })
}

/**
 * 计算两点间坐标的降级方案，如果腾讯地图API调用失败，降级为本地计算，可能存在一定的误差(一般不需要调用到本地的计算)
 * @param {object} points , { fromLat: 30.324359, fromLng: 120.142531, toLat: 30.303130000000007, toLng: 120.14600999999999 }
 */
export const calculateDistance = (points) => {
  const FINAL = 6378137.0
  const { fromLat, fromLng, toLat, toLng } = points
  // 求某个经纬度的值的角度值
  const flat = fromLat * Math.PI / 180.0;
  const flng = fromLng * Math.PI / 180.0;
  const tlat = toLat * Math.PI / 180.0;
  const tlng = toLng * Math.PI / 180.0;

  let result = Math.sin(flat) * Math.sin(tlat);
  result += Math.cos(flat) * Math.cos(tlat) * Math.cos(flng - tlng);
  return Math.floor(Math.acos(result) * FINAL);
}

/**
 * 根据坐标点数据，计算中心点坐标
 * @param {*} points 例：[{ latitude: 30.318754, longitude: 120.170827 }, { latitude: 30.31072, longitude: 120.16247 }]
 * @return [longitude, latitude]
 */
export const calculateCenterPoint = (points) => {
  const total = points.length;
  let centerPoint = { lng: 0, lat: 0 }
  let X = 0, Y = 0, Z = 0;
  points.map((point) => {
    let lng = point.longitude * Math.PI / 180;
    let lat = point.latitude * Math.PI / 180;
    let x, y, z;
    x = Math.cos(lat) * Math.cos(lng);
    y = Math.cos(lat) * Math.sin(lng);
    z = Math.sin(lat);
    X += x;
    Y += y;
    Z += z;
  });

  X = X / total;
  Y = Y / total;
  Z = Z / total;
  centerPoint = {
    lng: Math.atan2(Y, X) * 180 / Math.PI,
    lat: Math.atan2(Z, Math.sqrt(X * X + Y * Y)) * 180 / Math.PI
  }

  return [centerPoint.lng, centerPoint.lat]
}


/**
 * @description 加载高德地图js API
 */
export const AMapScrtiptLoad = () => {
  if (Taro.getEnv() === 'WEAPP' || window.AMap) return
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://webapi.amap.com/maps?v=1.3&key=${AMapKey}&callback=initAmap`
    document.body.appendChild(script)
    script.onload = function () {
      console.log('load AMP API')
      // 高德地图JS API加载回调之后，才是真正的加载完成
      window.initAmap = () => {
        console.log('amap init.......')
        resolve();
        window.amapInit = null
      }
    }
  })
}

/**
 * 根据指定的起点及终点，获取高德地图推荐路线经纬度坐标数组
 * @param {object} points , { fromLat: 30.324359, fromLng: 120.142531, toLat: 30.303130000000007, toLng: 120.14600999999999 }
 * @return [[fromLng, fromLat], [fromLng, fromLat]]
 */
export const getAMapSearchRidingRoute = async (points) => {
  await AMapScrtiptLoad()
  const { fromLat, fromLng, toLat, toLng } = points
  const fromPoint = [fromLng, fromLat]
  const toPoint = [toLng, toLat]
  const paths = []
  return new Promise((resolve, reject) => {
    AMap.service('AMap.Riding', () => {
      const riding = new AMap.Riding()
      riding.search(fromPoint, toPoint, (status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          // 起点坐标
          paths.push([result.origin.lng, result.origin.lat]);
          // 起点到终点的坐标
          result.routes[0].rides.forEach(ride =>
              ride.path.forEach(p => paths.push([p.lng, p.lat]))
            )
          // 终点坐标
          paths.push([result.destination.lng, result.destination.lat])
        } else {
          console.log('获取推荐路线失败！')
        }
        resolve(paths)
      });
    })
  })
}

/**
 * @description 调用腾讯地图API计算两点间的距离
 * @param {object} points , { fromLat: 30.324359, fromLng: 120.142531, toLat: 30.303130000000007, toLng: 120.14600999999999 }
 */
export const getAMapRidingDistance = async (points) => {
  // const points = { fromLat: 30.324359, fromLng: 120.142531, toLat: 30.303130000000007, toLng: 120.14600999999999 }
  const { fromLat, fromLng, toLat, toLng } = points
  const fromPoint = [fromLng, fromLat]
  const toPoint = [toLng, toLat]
  let distance = 0
  await AMapScrtiptLoad()
  return new Promise((resolve, reject) => {
    AMap.service('AMap.Riding', () => {
      const riding = new AMap.Riding()
      riding.search(fromPoint, toPoint, (status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          if (result.routes && result.routes.length) {
            distance = result.routes[0].distance;
          }
        } else {
          distance = calculateDistance(points)
        }
        resolve({ distance })
      });
    })
  })
}
