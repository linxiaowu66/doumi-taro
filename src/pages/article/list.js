import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import Footer from '../../components/Footer'

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

  navToArticleList = () => {
    Taro.navigateTo({ url: `/pages/article/list` })
  }

  render () {
    return (
      <View className='list-container'>
        <View className='header'>
          <View className='logo'>豆米的博客</View>
          <View className='menu'>菜单</View>
        </View>
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
        <View className='nav-menu'>
          <View className='close'>X</View>
          <View className='menu'>
            <View className='item'>首页</View>
            <View className='item'>
              <View className='cat title'>分类</View>
              <View className='cat-list'>
                <View>nodejs</View>
                <View>css</View>
                <View>数据库</View>
              </View>
            </View>
            <View className='item'>
              <View className='archive title'>归档</View>
              <View className='archive-list'>
                <View className='archive-year'>2016年</View>
                  <View className='archive-month'>2016年01月 (1)</View>
                  <View className='archive-month'>2016年02月 (2)</View>
                  <View className='archive-month'>2016年03月 (12)</View>
                <View className='archive-year'>2017年</View>
                <View className='archive-year'>2018年</View>
              </View>
            </View>
            <View className='item'>关于豆米</View>
            <View className='item'>关于本站</View>
          </View>
        </View>
        <View className='widget'>
          <View className='title'>网站统计</View>
          <View className='statistics'>
            <Text>文章数：</Text>
            <Text>81</Text>
          </View>
          <View className='statistics'>
            <Text>今日新增文章数：</Text>
            <Text>81</Text>
          </View>
          <View className='statistics'>
            <Text>网站访问量：</Text>
            <Text>81</Text>
          </View>
          <View className='statistics'>
            <Text>今日访问量：</Text>
            <Text>81</Text>
          </View>
        </View>
        <Footer />
      </View>
    )
  }
}

export default ArticleList
