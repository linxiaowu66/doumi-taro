import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './header.scss'

export default class Header extends Component {
  showMenu = () => {
    this.props.showMenu()
  }
  render() {
    return (
      <View className='header'>
        <View className='logo'>豆米的博客</View>
        <View className='menu' onClick={this.showMenu}>菜单</View>
      </View>
    )
  }
}
