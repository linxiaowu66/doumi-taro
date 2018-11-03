import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Footer from '../../components/Footer'
import DouMi from '../../components/DouMi';

import './index.scss'

/* eslint-disable */
const index1 = require('../../assets/index1.jpg')
const index2 = require('../../assets/index2.jpg')
const index3 = require('../../assets/index3.jpg')
const index4 = require('../../assets/index4.jpg')
const index5 = require('../../assets/index5.jpg')

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
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
      <View className='home-container'>
        <View className='header'>
          <Text className='wedding-link'>5udou.cn</Text>
        </View>
        <View className='wrapper'>
          <DouMi nickName='豆米' />
          <View className='navigation'>
            <View className='nav-item'>
              <Image src={index1} className='nav-pic' />
              <View className='nav-text'>
                <View className='text-title'>首页</View>
                <View className='text-content'>前方</View>
                <View className='text-content'>为你开启</View>
                <Text className='text-location'>杭州 · 西溪</Text>
              </View>
            </View>
            <View className='nav-item'>
              <Image src={index2} className='nav-pic' />
              <View className='nav-text'>
                <View className='text-title'>启程</View>
                <View className='text-content'>扬帆</View>
                <View className='text-content'>在风浪中拼搏</View>
                <Text className='text-location'>杭州 · 湘湖</Text>
              </View>
            </View>
            <View className='nav-item'>
              <Image src={index3} className='nav-pic' />
              <View className='nav-text'>
                <View className='text-title'>博客</View>
                <View className='text-content'>记录</View>
                <View className='text-content'>感悟不止一点点</View>
                <Text className='text-location'>杭州 · 西湖</Text>
              </View>
            </View>
            <View className='nav-item'>
              <Image src={index4} className='nav-pic' />
              <View className='nav-text'>
                <View className='text-title'>行进</View>
                <View className='text-content'>梦想</View>
                <View className='text-content'>就在前方</View>
                <Text className='text-location'>杭州 · 九溪</Text>
              </View>
            </View>
            <View className='nav-item'>
              <Image src={index5} className='nav-pic' />
              <View className='nav-text'>
                <View className='text-title'>关于豆米</View>
                <View className='text-content'>你想了解的</View>
                <View className='text-content'>都在这里</View>
                <Text className='text-location'>杭州 · 你和我</Text>
              </View>
            </View>
          </View>
          <View className='hot-articles'>热门文章<Text className='nav-to-all' onClick={() => this.navToArticleList()}>(全部博客文章)</Text></View>
          <View className='article-list'>
            <View className='article'>
              <Text className='title'>由form表单来说说前后台数据之间的交互</Text>
              <Text className='time'>2016-09-24 19:57</Text>
            </View>
          </View>
        </View>
        <Footer />
      </View>
    )
  }
}

export default Index
