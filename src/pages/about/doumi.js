import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import Widget from '../../components/Widget';
import Header from '../../components/Header'
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
        <View className='feature'>
          <View className='title'>关于米</View>
          <View className='desc'>一个烧得一手好菜的程序猿。</View>
          <View className='desc'>我的Github：https://github.com/linxiaowu66</View>
          <View className='desc'>我的简历：https://blog.5udou.cn/resume/mizha</View>
          <View className='desc'>我的掘金首页：https://juejin.im/user/5803811ba0bb9f005887dca6</View>
        </View>
        <View className='feature'>
          <View className='title'>关于豆</View>
          <View className='desc'>一个“给我一点色彩，就能让生活五颜六色”的程序媛。</View>
          <View className='desc'>我的Github：https://github.com/heyangxing</View>
          <View className='desc'>我的简历：待开发</View>
          <View className='desc'>我的掘金首页：https://juejin.im/user/58034ce92e958a0055d721e4</View>
        </View>
        <View>
          <View className='why'>为什么要有这么一个博客？</View>
          <View className='answer'>我们的初衷是想要记录工作学习的点滴，把想总结的给总结出来，供社区的前端童鞋们参考，而后写着写着也混杂了一些生活的感悟，以后或许会有更多题材，但愿我们的生活够丰富。</View>
        </View>
        <Footer />
      </View>
    )
  }
}

export default AboutBlog
