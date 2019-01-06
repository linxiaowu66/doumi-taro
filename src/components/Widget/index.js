import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { fetchWebsiteStatistics } from '../../actions/index'

import './widget.scss'

@connect(({ websiteReducer }) => ({
  websiteReducer
}), (dispatch) => ({
  async fetchWebsiteStatistics(res) {
    return await dispatch(fetchWebsiteStatistics(res))
  },
}))
export default class Widget extends Component {
  async componentWillMount() {
    this.props.fetchWebsiteStatistics()
  }
  render() {
    const { statistics } = this.props.websiteReducer
    return (
      <View className='widget'>
        <View className='title'>网站统计</View>
        <View className='statistics'>
          <Text>文章数：</Text>
          <Text>{statistics && statistics.numOfArticles}</Text>
        </View>
        <View className='statistics'>
          <Text>今日新增文章数：</Text>
          <Text>{statistics && statistics.newArticlesToday}</Text>
        </View>
        <View className='statistics'>
          <Text>网站访问量：</Text>
          <Text>{statistics && statistics.totalVisitCounts}</Text>
        </View>
        <View className='statistics'>
          <Text>今日访问量：</Text>
          <Text>{statistics && statistics.todayVisitCounts}</Text>
        </View>
      </View>
    )
  }
}
