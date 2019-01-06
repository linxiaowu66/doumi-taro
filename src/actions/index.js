import Taro from '@tarojs/taro'
import {
  FETCH_ARCHIVE_LIST,
  FETCH_ARTICLE_LIST,
  FETCH_CATEGORY_LIST,
  FETCH_HOTTEST_ARTICLES,
  FETCH_TAGS_LIST,
  FETCH_WEBSITE_CHANGELOG,
  FETCH_WEBSITE_STATISTICS,
  FETCH_ARTICLE_DETAIL
} from '../constants/redux-types'
import {
  getTagList,
  getArchiveList,
  getCategoryList,
  getHottestArticles,
  getArticleListByPage,
  getWebsiteChangeLog,
  getWebsiteStatistics,
  getArticleDetail
} from '../api'

// 获取热门文章
export const fetchHottestArticles = (limit) => {
  return async (dispatch) => {
    try {
      const res = await getHottestArticles({ limit })
      // return res
      dispatch({ type: FETCH_HOTTEST_ARTICLES, res })
      return {
        ...res.data,
      }
    } catch (err) {
      Taro.showToast({title: err.dmSpecResp, icon: 'none'})
    }
  }
}

// 获取博客列表
export const fetchArticleListByPage = (params) => {
  return async (dispatch) => {
    try {
      const res = await getArticleListByPage(params)
      // return res
      dispatch({ type: FETCH_ARTICLE_LIST, res })
      return {
        ...res.data,
      }
    } catch (err) {
      Taro.showToast({title: err.dmSpecResp, icon: 'none'})
    }
  }
}

// 获取文章详情
export const fetchArticleDetail = (params) => {
  return async (dispatch) => {
    try {
      const res = await getArticleDetail(params)
      // return res
      dispatch({ type: FETCH_ARTICLE_DETAIL, res })
      return {
        ...res.data,
      }
    } catch (err) {
      Taro.showToast({title: err.dmSpecResp, icon: 'none'})
    }
  }
}

// 获取网站基本数据
export const fetchWebsiteStatistics = (params) => {
  return async (dispatch) => {
    try {
      const res = await getWebsiteStatistics(params)
      // return res
      dispatch({ type: FETCH_WEBSITE_STATISTICS, res })
      return {
        ...res.data,
      }
    } catch (err) {
      Taro.showToast({title: err.dmSpecResp, icon: 'none'})
    }
  }
}

// 获取网站更新历史
export const fetchWebsiteChangeLog = (params) => {
  return async (dispatch) => {
    try {
      const res = await getWebsiteChangeLog(params)
      // return res
      dispatch({ type: FETCH_WEBSITE_CHANGELOG, res })
      return {
        ...res.data,
      }
    } catch (err) {
      Taro.showToast({title: err.dmSpecResp, icon: 'none'})
    }
  }
}

// 获取博客归档列表
export const fetchArchiveList = (params) => {
  return async (dispatch) => {
    try {
      const res = await getArchiveList(params)
      // return res
      dispatch({ type: FETCH_ARCHIVE_LIST, res })
      return {
        ...res.data,
      }
    } catch (err) {
      Taro.showToast({title: err.dmSpecResp, icon: 'none'})
    }
  }
}

// 获取博客分类列表
export const fetchCategoryList = (params) => {
  return async (dispatch) => {
    try {
      const res = await getCategoryList(params)
      // return res
      dispatch({ type: FETCH_CATEGORY_LIST, res })
      return {
        ...res.data,
      }
    } catch (err) {
      Taro.showToast({title: err.dmSpecResp, icon: 'none'})
    }
  }
}

// 获取博客分类列表
export const fetchTagsList = (params) => {
  return async (dispatch) => {
    try {
      const res = await getTagList(params)
      // return res
      dispatch({ type: FETCH_TAGS_LIST, res })
      return {
        ...res.data,
      }
    } catch (err) {
      Taro.showToast({title: err.dmSpecResp, icon: 'none'})
    }
  }
}
