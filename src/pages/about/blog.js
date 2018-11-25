import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import Widget from '../../components/Widget';
import Header from '../../components/Header'
// import DouMi from '../../components/DouMi';

import './blog.scss'

class AboutBlog extends Component {
  config = {
    navigationBarTitleText: '关于本站'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='blog-container'>
        <Header />
        <View className='bread-crumb'>
          <Text>首页</Text>
          <Text>/ 博文列表</Text>
          <Text>/ 关于本站</Text>
        </View>
        <View className='website-history'>
          <View className='changelog'>
            <View className='title'>本站正式上线</View>
            <View className='desc'>8月8号，完成所有博客的基本功能，除了关于豆米的网页暂时没完成之外。</View>
            <View className='desc'>豆米的博客意在分享web开发的点点滴滴，前端和后台都会有所涉及，再适当分享些生活的精彩。</View>
            <View className='update-time'>
              <Text>2016/08</Text>
              <Text>08  周一</Text>
            </View>
          </View>
          <View className='changelog'>
            <View className='title'>完成文章搜索功能</View>
            <View className='desc'>9月11号，完成网站的首页以及后台的文章搜索功能。</View>
            <View className='desc'>暂时只提供对博客的标题搜索，不支持全文搜索。</View>
            <View className='update-time'>
              <Text>2016/09</Text>
              <Text>11  周日</Text>
            </View>
          </View>
        </View>
        <Menu />
        <Widget />
        <Footer />
      </View>
    )
  }
}

export default AboutBlog
