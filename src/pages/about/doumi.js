import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import { AtCard } from "taro-ui"
import Footer from '../../components/Footer'
import DouMi from '../../components/DouMi';

import './doumi.scss'

class AboutBlog extends Component {
  config = {
    navigationBarTitleText: '关于豆米'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navTo = () => {
    Taro.navigateTo({ url: `/pages/resume/mizha` })
  }

  render () {
    return (
      <View className='doumi-container'>
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
        <View className='list_view'>
          <View className='list'>
            <View className='list_title'>Email</View>
            <View className='list_content'>linguang661990@126.com</View>
          </View>
          <View className='list'>
            <View className='list_title'>Github</View>
            <View className='list_content'>https://github.com/linxiaowu66</View>
          </View>
          <View className='list'>
            <View className='list_title'>Resume</View>
            <View className='list_content' onClick={this.navTo.bind(this)}>传送门</View>
          </View>
        </View>
        <View className='list_view'>
          <View className='list'>
            <View className='list_title'>Email</View>
            <View className='list_content'>heyang_xing@126.com</View>
          </View>
          <View className='list'>
            <View className='list_title'>Github</View>
            <View className='list_content'>https://github.com/heyangxing</View>
          </View>
          <View className='list'>
            <View className='list_title'>Resume</View>
            <View className='list_content'>https://blog.5udou.cn/resume/mizha</View>
          </View>
        </View>
        <Footer />
      </View>
    )
  }
}

export default AboutBlog
