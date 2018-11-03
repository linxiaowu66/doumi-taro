import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import Widget from '../../components/Widget';
import Header from '../../components/Header'
import DouMi from '../../components/DouMi';

import './detail.scss'

class ArticleDetail extends Component {
  config = {
    navigationBarTitleText: '博客'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='detail-container'>
        <Header />
        <View className='bread-crumb'>
          <Text>首页</Text>
          <Text>/ 博文列表</Text>
          <Text>Git Tag在软件版本发布中的实践</Text>
        </View>
        <View className='article-content'>
          <View className='article-header'>
            <View className='article-date'>
              <Text>20</Text>
              <Text>Oct</Text>
            </View>
            <View className='article-title'>Git Tag在软件版本发布中的实践</View>
            <View className='article-hot'>607℃</View>
          </View>
          <View className='article-tags'>
            <Text>git</Text>
            <Text>tag</Text>
          </View>
          <View className='article-text'>

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
