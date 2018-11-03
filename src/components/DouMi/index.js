
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './doumi.scss'

export default class DouMi extends Component {
  render() {
    return (
      <View className='blog-profile'>
        <View className='author-image'>
          <Image src={doumi} className='img' />
        </View>
        <View className='author'>
          <View className='name'>豆米</View>
          <View className='description'>豆米目前生活在“上有天堂，下有苏杭”的杭州，美不胜收的美景之地也收获着甜蜜恩爱的生活。豆米热爱前端，热爱互联网，豆米是洋芋(土豆-豆)和米喳(米)的简称。</View>
          <View className='author-meta'>
            <View>杭州</View>
            <View className='wedding-url'>https://www.5udou.cn</View>
          </View>
        </View>
      </View>
    )
  }
}
