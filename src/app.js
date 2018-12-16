import Taro, { Component } from '@tarojs/taro'

import { Provider } from '@tarojs/redux'

import '@tarojs/async-await'

import configStore from './store'
import './util/polyfill'

import Index from './pages/home/index.js'

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
}


const store = configStore()


class App extends Component {
  //对应小程序主配置
  config = {
    pages: [
      'pages/home/index',
      'pages/article/list',
      'pages/article/detail',
      'pages/about/blog',
      'pages/about/doumi',
      'pages/resume/mizha'
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
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
