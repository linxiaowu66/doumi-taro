import request from '../util/ajax'

// 获取热门文章
export const getHottestArticles = request('/blog/list/hottest')

// 获取文章列表
export const getArticleListByPage = request('/blog/list')

// 获取豆米博客网站统计数据
export const getWebsiteStatistics = request('/website/statistics')

// 获取豆米博客网站CHANGELOG
export const getWebsiteChangeLog = request('/website/changelog')

// 获取文章归档列表
export const getArchiveList =  request('/blog/archive/list')

// 获取文章分类列表
export const getCategoryList =  request('/blog/category/list')

// 获取文章标签列表
export const getTagList =  request('/blog/tags/list')
