import Taro from '@tarojs/taro'
import {
  FETCH_ARCHIVE_LIST,
  FETCH_ARTICLE_LIST,
  FETCH_CATEGORY_LISY,
  FETCH_HOTTEST_ARTICLES,
  FETCH_TAGS_LIST,
  FETCH_WEBSITE_CHANGELOG,
  FETCH_WEBSITE_STATISTICS
} from '../constants/redux-types'
import {
  getTagList,
  getArchiveList,
  getCategoryList,
  getHottestArticles,
  getArticleListByPage,
  getWebsiteChangeLog,
  getWebsiteStatistics,
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
      Taro.showToast({title: err.dwdSpecResp, icon: 'none'})
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
      Taro.showToast({title: err.dwdSpecResp, icon: 'none'})
    }
  }
}
