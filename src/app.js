import Taro, { Component } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'

import { Provider } from '@tarojs/redux'

import '@tarojs/async-await'

import configStore from './store'
import './util/polyfill'


import Index from './pages/home/index.js'

// const ENV = process.env.NODE_ENV || 'development'
// if (Taro.getEnv() === 'WEAPP') {
//   const fundebug = require('fundebug-wxjs')
//   fundebug.init({
//     apikey : 'e72c9fab48437f4969910d9f3895417c3d4e25f41063b069a28d93642c6e50f5',
//     releaseStage : ENV === 'production' ? 'production' : 'development',
//     silentHttp : true,
//     silentVideo: false,
//     setSystemInfo : true,
//     // setLocation : true,
//   })
//   global.fundebug = fundebug;
// }


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
    tabBar: {
      list: [
        {
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: './assets/tabs/home.png',
          selectedIconPath: './assets/tabs/home-active.png',
        },
        {
          pagePath: 'pages/article/list',
          text: '博客',
          iconPath: './assets/tabs/blog.png',
          selectedIconPath: './assets/tabs/blog-active.png',
        },
        {
          pagePath: 'pages/about/doumi',
          text: '我的',
          iconPath: './assets/tabs/user.png',
          selectedIconPath: './assets/tabs/user-active.png',
        },
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
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
