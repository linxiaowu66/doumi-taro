import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Footer from '../../components/Footer'
import DouMi from '../../components/DouMi';
import DouMiSwiper from '../../components/Swiper';
import { fetchHottestArticles } from '../../actions/index'

import './index.scss'

/* eslint-disable */
const index1 = require('../../assets/banners/xixishidi.jpeg')
const index2 = require('../../assets/banners/xianghu.png')
const index3 = require('../../assets/banners/xihu.png')
const index4 = require('../../assets/banners/jiuxi.png')
const index5 = require('../../assets/banners/we.jpg')

@connect(({ articleReducer }) => ({
  articleReducer
}), (dispatch) => ({
  async fetchHottestArticles(res) {
    return await dispatch(fetchHottestArticles(res))
  },
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
  }
  async componentWillMount() {
    this.props.fetchHottestArticles(5)
    // 为什么在这里使用await的话，会报错
    // const list = await this.props.fetchHottestArticles(10)
    // this.setState({
    //   hottestArticles: list
    // })
    // 在render函数中使用这个值去渲染起初会报错：（in promise） hottestArticles.map is not function
  }
  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navToArticleList = () => {
    Taro.navigateTo({ url: `/pages/article/list` })
  }

  render () {
    const { hottestArticles } = this.props.articleReducer
    const banner = [{
      image_src: index1,
      link: '/pages/home/index'
    }, {
      image_src: index2,
      link: '/pages/article/list'
    }, {
      image_src: index3,
      link: 'pages/about/blog'
    }, {
      image_src: index4,
      link: 'pages/resume/mizha'
    }, {
      image_src: index5,
      link: 'pages/about/doumi'
    }]
    return (
      <View className='home-container'>
        <DouMiSwiper banner={banner} home />
        <View className='wrapper'>
          <DouMi nickName='豆米' />
          <View className='hot-articles'>热门文章<Text className='nav-to-all' onClick={this.navToArticleList.bind(this)}>(全部博客文章)</Text></View>
          <View className='article-list'>
          {
            hottestArticles && hottestArticles.map(item => (
              <View className='article'>
                <Text className='title'>{item.title}</Text>
                <Text className='time'>{item.archiveTime}</Text>
              </View>
              ))
            }
          </View>

        </View>
        <Footer />
      </View>
    )
  }
}

export default Index
