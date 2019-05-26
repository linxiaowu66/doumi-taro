import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import { AtDrawer } from 'taro-ui'
import { fetchArchiveList, fetchCategoryList } from '../../actions/index'

import './menu.scss'

@connect(({ articleReducer }) => ({
  articleReducer
}), (dispatch) => ({
  async fetchArchiveList(res) {
    return await dispatch(fetchArchiveList(res))
  },
  async fetchCategoryList(res) {
    return await dispatch(fetchCategoryList(res))
  },
}))
export default class Menu extends Component {
  async componentWillMount() {
    this.props.fetchArchiveList()
    this.props.fetchCategoryList()
  }
  render() {
    // const { archiveList, categoryList } = this.props.articleReducer
    const { isShow } = this.props
    return (
      <AtDrawer
        show={isShow}
        mask
      >
        <View className='drawer-item'>优先展示items里的数据</View>
        <View className='drawer-item'>如果items没有数据就会展示children</View>
        <View className='drawer-item'>这是自定义内容</View>
        <View className='drawer-item'>这是自定义内容</View>
      </AtDrawer>
    )
  }
}
