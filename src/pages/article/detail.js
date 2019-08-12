import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import {
  TaroRichText
} from 'taro_rich_text';
import { AtTag } from 'taro-ui'
import Footer from '../../components/Footer'
import Widget from '../../components/Widget';
import DouMi from '../../components/DouMi';
import { fetchArticleDetail } from '../../actions/index'

import './detail.scss'
import './github.css'

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
    return (
      <View className='detail-container'>
        <View className='article-content'>
          <View className='article-header'>
            <View className='article-title'>{articleDetail && articleDetail.title}</View>
            <View className='article-hot'>{`${articleDetail & articleDetail.pageViewsCount}℃`}</View>
          </View>
          <View className='article-time'>
            <Text>{articleDetail && articleDetail.archiveTime}</Text>
          </View>
          <View className='article-tags'>
          {
            articleDetail && articleDetail.tagsArray && articleDetail.tagsArray.map((tag, index) => (<AtTag size='small' className='tag' circle active key={index}>{tag}</AtTag>))
          }
          </View>
          <TaroRichText
            raw={false}
            className='article-text'
            type='markdown'
            richText={articleDetail && articleDetail.content}
          />
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
        </View>
        <Widget />
        <Footer />
      </View>
    )
  }
}

export default ArticleDetail
