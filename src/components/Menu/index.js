import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './menu.scss'

export default class Menu extends Component {
  render() {
    return (
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
    )
  }
}
