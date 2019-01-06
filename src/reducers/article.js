import {
  FETCH_ARCHIVE_LIST,
  FETCH_ARTICLE_LIST,
  FETCH_HOTTEST_ARTICLES,
  FETCH_TAGS_LIST,
  FETCH_CATEGORY_LIST,
  FETCH_ARTICLE_DETAIL
} from '../constants/redux-types'

const initState = {
  hottestArticles: [],
  articleList: [],
  archiveList: [],
  categoryList: [],
  tagList: [],
  articleDetail: {}
}

function newState(state, updateData, cb) {
  const data = {
    ...state,
    ...updateData,
  }
  typeof cb === 'function' && cb(data)
  return data
}

export default function ArticleReducers (state = initState, action) {
  const { type, res, cb } = action
  let updateData = {}
  switch (type) {
    // 获取热门文章
    case FETCH_HOTTEST_ARTICLES:
      if (res) {
        const rd  = res.data || {}
        updateData = {
          hottestArticles: rd
        }
        return newState(state, updateData, cb)
      }
      return state
    // 获取文章列表
    case FETCH_ARTICLE_LIST:
      if(res) {
        const rd = res.result || {}
        const list = rd.articles || []

        updateData = {
          articleList: list
        }
        return newState(state, updateData, cb)
      }
      return state
    // 获取文章详情
    case FETCH_ARTICLE_DETAIL:
      if(res) {
        const rd = res.result || {}

        console.log('^^^^^', rd)
        updateData = {
          articleDetail: rd
        }
        return newState(state, updateData, cb)
      }
      return state
    // 获取归档列表
    case FETCH_ARCHIVE_LIST:
      if(res) {
        const rd = res.result || {}

        updateData = {
          archiveList: rd
        }
        return newState(state, updateData, cb)
      }
      return state
    // 获取分类列表
    case FETCH_CATEGORY_LIST:
      if(res) {
        const rd = res.result || {}

        updateData = {
          categoryList: rd
        }
        return newState(state, updateData, cb)
      }
      return state
    // 获取标签列表
    case FETCH_TAGS_LIST:
      if(res) {
        const rd = res.result || {}

        updateData = {
          tagList: rd
        }
        return newState(state, updateData, cb)
      }
      return state
    default:
     return state
  }
}
