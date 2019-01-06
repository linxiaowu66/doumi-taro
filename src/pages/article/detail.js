import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import Widget from '../../components/Widget';
import Header from '../../components/Header'
import DouMi from '../../components/DouMi';
import { fetchArticleDetail } from '../../actions/index'

import './detail.scss'

@connect(({ articleReducer }) => ({
  articleReducer
}), (dispatch) => ({
  async fetchArticleDetail(res) {
    return await dispatch(fetchArticleDetail(res))
  },
}))
class ArticleDetail extends Component {
  config = {
    navigationBarTitleText: '博客'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  async componentWillMount() {
    const { slug } = this.$router.params

    this.props.fetchArticleDetail({ slug })
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { articleDetail } = this.props.articleReducer
    console.log('******))))', articleDetail)
    return (
      <View className='detail-container'>
        <Header />
        <View className='bread-crumb'>
          <Text>首页</Text>
          <Text>/ 博文列表</Text>
          <Text>{`/ ${articleDetail && articleDetail.title}`}</Text>
        </View>
        <View className='article-content'>
          <View className='article-header'>
            <View className='article-date'>
              <Text>{articleDetail && articleDetail.archiveDay}</Text>
              <Text>{articleDetail && articleDetail.archiveMonth}</Text>
            </View>
            <View className='article-title'>{articleDetail && articleDetail.title}</View>
            <View className='article-hot'>{`${articleDetail & articleDetail.pageViewsCount}℃`}</View>
          </View>
          <View className='article-tags'>
          {
            articleDetail && articleDetail.tagsArray && articleDetail.tagsArray.map((tag, idx) => (<Text key={idx}>{tag}</Text>))
          }
          </View>
          <View className='article-text'>
          {
            articleDetail && articleDetail.content
          }
          </View>
          <DouMi
            imgStyle={{
              width: '3.090909090909091rem',
              height: '3.090909090909091rem',
              top: '-1.5454545454545454rem'
            }}
            nickName='小米喳和大洋芋'
            descriptionStyle={{
              fontSize: '0.6363636363636364rem',
              lineHeight: '0.8181818181818182rem'
            }}
          />
          <View id='disqus_thread'>
            评论正在加载，请稍后...
          </View>
        </View>
        <Menu />
        <Widget />
        <Footer />
      </View>
    )
  }
}

export default ArticleDetail
