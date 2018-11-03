import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './widget.scss'

export default class Widget extends Component {
  render() {
    return (
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
    )
  }
}
