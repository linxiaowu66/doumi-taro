import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import Widget from '../../components/Widget';
import Header from '../../components/Header'

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
            <View>
              <Text>20</Text>
              <Text>Oct</Text>
            </View>
            <View>Git Tag在软件版本发布中的实践</View>
            <View>607℃</View>
          </View>
          <View className='article-tags'>
            <Text>git</Text>
            <Text>tag</Text>
          </View>
          <View className='article-text'>

          </View>
          <Headers />
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
