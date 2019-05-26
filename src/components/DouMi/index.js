
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './doumi.scss'

const doumi = require('../../assets/douMi.jpg')
export default class DouMi extends Component {
  render() {
    const { imgStyle, nickName, descriptionStyle } = this.props
    return (
      <View className='blog-profile'>
        <View className='author-image' style={imgStyle}>
          <Image src={doumi} className='img' />
        </View>
        <View className='author'>
          <View className='name'>{nickName}</View>
          <View style={descriptionStyle} className='description'>豆米目前生活在“上有天堂，下有苏杭”的杭州，美不胜收的美景之地也收获着甜蜜恩爱的生活。豆米热爱前端，热爱互联网，豆米是洋芋(土豆-豆)和米喳(米)的简称。</View>
          <View className='author-meta'>
            <View><AtIcon value='map-pin' size='20' color='#119d55'></AtIcon>：杭州</View>
            <View className='wedding-url'><AtIcon value='link' size='20' color='#119d55'></AtIcon>：https://www.5udou.cn</View>
          </View>
        </View>
      </View>
    )
  }
}
