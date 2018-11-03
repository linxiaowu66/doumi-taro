import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import Footer from '../../components/Footer'
import Widget from '../../components/Widget'
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import './list.scss'

class ArticleList extends Component {
  config = {
    navigationBarTitleText: '博客列表'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navToArticleDetail = () => {
    Taro.navigateTo({ url: `/pages/article/detail` })
  }

  render () {
    return (
      <View className='list-container'>
        <Header />
        <View className='bread-crumb'>
          <Text>首页</Text>
          <Text>/ 博文列表</Text>
        </View>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          style='height: 100vh;'
          lowerThreshold='20'
          upperThreshold='20'
          onScrolltoupper={this.onScrolltoupper}
          onScroll={this.onScroll}
        >
          <View className='article-block'>
            <View className='title'>Git Tag在软件版本发布中的实践</View>
            <View className='ribble'>
              2018-09-10
            </View>
            <Image src='https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/tag-release.png?x-oss-process=style/addWaterMark' />
            <View className='brief'>
              <Text>侧耳测测测测测</Text>
            </View>
            <View className='nav-to-detail'>阅读全文</View>
          </View>
          <View className='article-block'>
            <View className='title'>Git Tag在软件版本发布中的实践</View>
            <View className='ribble'>
              2018-09-10
            </View>
            <Image src='https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/tag-release.png?x-oss-process=style/addWaterMark' />
            <View className='brief'>
              <Text>侧耳测测测测测</Text>
            </View>
            <View className='nav-to-detail'>阅读全文</View>
          </View>
          <View className='article-block'>
            <View className='title'>Git Tag在软件版本发布中的实践</View>
            <View className='ribble'>
              2018-09-10
            </View>
            <Image src='https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/tag-release.png?x-oss-process=style/addWaterMark' />
            <View className='brief'>
              <Text>侧耳测测测测测</Text>
            </View>
            <View className='nav-to-detail'>阅读全文</View>
          </View>
          <View className='article-block'>
            <View className='title'>Git Tag在软件版本发布中的实践</View>
            <View className='ribble'>
              2018-09-10
            </View>
            <Image src='https://blogimages2016.oss-cn-hangzhou.aliyuncs.com/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/tag-release.png?x-oss-process=style/addWaterMark' />
            <View className='brief'>
              <Text>侧耳测测测测测</Text>
            </View>
            <View className='nav-to-detail'>阅读全文</View>
          </View>
        </ScrollView>
        <Menu />
        <Widget />
        <Footer />
      </View>
    )
  }
}

export default ArticleList
