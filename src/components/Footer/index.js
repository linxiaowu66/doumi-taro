import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './footer.scss'

export default class Footer extends Component {
  render () {
    return (
      <View className='footer'>
        <View>
        Copyright © 豆米博客. 2017 • All rights reserved. | 浙ICP备15041819号-1
        </View>
      </View>
    )
  }
}
