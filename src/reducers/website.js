import {
  FETCH_WEBSITE_CHANGELOG,
  FETCH_WEBSITE_STATISTICS
} from '../constants/redux-types'

const initState = {
  statistics: {},
  changeLog: []
}

function newState(state, updateData, cb) {
  const data = {
    ...state,
    ...updateData,
  }
  typeof cb === 'function' && cb(data)
  return data
}

export default function websiteReducer (state = initState, action) {
  const { type, res, cb } = action
  let updateData = {}
  switch (type) {
    // 获取网站统计数据
    case FETCH_WEBSITE_STATISTICS:
      if (res) {
        const rd  = res.result || {}
        updateData = {
          statistics: rd
        }
        return newState(state, updateData, cb)
      }
      return state
    // 获取网站更新记录
    case FETCH_WEBSITE_CHANGELOG:
      if(res) {
        const rd = res.result || {}
        updateData = {
          changeLog: rd
        }
        return newState(state, updateData, cb)
      }
      return state
    default:
     return state
  }
}
