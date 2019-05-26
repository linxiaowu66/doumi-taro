import Taro, { Component } from '@tarojs/taro'
import { View, Text, RichText } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu';
import Widget from '../../components/Widget';
import { fetchWebsiteChangeLog } from '../../actions/index'
// import DouMi from '../../components/DouMi';

import './blog.scss'

@connect(({ websiteReducer }) => ({
  websiteReducer
}), (dispatch) => ({
  async fetchWebsiteChangeLog(res) {
    return await dispatch(fetchWebsiteChangeLog(res))
  },
}))
class AboutBlog extends Component {
  config = {
    navigationBarTitleText: '关于本站'
  }
  async componentWillMount() {
    this.props.fetchWebsiteChangeLog()
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { changeLog } = this.props.websiteReducer
    return (
      <View className='blog-container'>
        <View className='website-history'>
        {
          changeLog && changeLog.map((item, idx) => (
            <View className='changelog' key={idx}>
              <View className='title'>{item.title}</View>
              <View className='desc'>{item.desc1}</View>
              <RichText className='desc' nodes={item.desc2}></RichText>
              <View className='update-time'>
                <Text>{item.date}</Text>
                <Text>{item.time}</Text>
              </View>
            </View>
          ))
        }
        </View>
        <Menu />
        <Widget />
        <Footer />
      </View>
    )
  }
}

export default AboutBlog
