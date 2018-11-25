import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import Widget from '../../components/Widget';
import Header from '../../components/Header'
import DouMi from '../../components/DouMi';

import './resume.scss'

class MiZhaResume extends Component {
  config = {
    navigationBarTitleText: '米喳的简历'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='resume-container'>
        <View className='personal-info'>
          <View className='author-image'>
            <View className='img'></View>
          </View>
          <View className='name'>林光</View>
          <View className='summary'>全栈的忠实粉丝，努力为前端发展添砖加瓦</View>
          <View className='another'>
            <Text>1990.07.07</Text>
            <Text>杭州</Text>
            <Text>151****53</Text>
            <Text>linguang661990@126.com</Text>
          </View>
        </View>
        <View className='experiment'>
          <View className='title'>
            <View>工作经历</View>
          </View>
          <View className='dianwoda'>
            <View className='company'>
              <Text>点我达</Text>
              <Text>2016.08 ~ 至今</Text>
            </View>
            <View className='project'>
              <View className='name'>骑手和商家混合APP</View>
              <View className='list'>
                <View className='item'>参与项目的优化和维护，需求迭代</View>
                <View className='item'>参与网关的开发优化、部署、监控</View>
              </View>
            </View>
          </View>
        </View>
        <Footer />
      </View>
    )
  }
}

export default MiZhaResume
