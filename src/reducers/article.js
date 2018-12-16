import {
  FETCH_ARCHIVE_LIST,
  FETCH_ARTICLE_LIST,
  FETCH_CATEGORY_LISY,
  FETCH_HOTTEST_ARTICLES,
  FETCH_TAGS_LIST,
  FETCH_WEBSITE_CHANGELOG,
  FETCH_WEBSITE_STATISTICS
} from '../constants/redux-types'

const initState = {
  hottestArticles: []
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
    // 获取计费规则
    case FETCH_HOTTEST_ARTICLES:
      if (res) {
        const rd  = res.data || {}
        updateData = {
          hottestArticles: rd
        }
        return newState(state, updateData, cb)
      }
      return state
    default:
     return state
  }
}
