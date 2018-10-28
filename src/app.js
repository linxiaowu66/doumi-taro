import Taro, { Component } from '@tarojs/taro'

import { Provider } from '@tarojs/redux'

import { View } from '@tarojs/components'

import '@tarojs/async-await'

import configStore from './store'
import './util/polyfill'
import Raytheon from './util/raytheon'

const ENV = process.env.NODE_ENV || 'development'
if (Taro.getEnv() === 'WEAPP') {
  const fundebug = require('fundebug-wxjs')
  fundebug.init({
    apikey : 'e72c9fab48437f4969910d9f3895417c3d4e25f41063b069a28d93642c6e50f5',
    releaseStage : ENV === 'production' ? 'production' : 'development',
    silentHttp : true,
    silentVideo: false,
    setSystemInfo : true,
    // setLocation : true,
  })
  global.fundebug = fundebug;
} else {
  Raytheon.mount()
}


const store = configStore()


class App extends Component {
  //对应小程序主配置
  config = {
    // 框架有坑，不会自动获取目录下的index文件，需要加上文件名
    pages: [
      'pages/home/index',
      'pages/article/list'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '豆米的博客',
      navigationBarTextStyle: 'black',
      backgroundColor: '#f6f7f8',
    },
  }
  componentDidMount() {
  }
  render () {
    return (
      <Provider store={store}>
        <View />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
