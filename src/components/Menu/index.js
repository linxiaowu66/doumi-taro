import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
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
    const { archiveList, categoryList } = this.props.articleReducer
    const { isShow } = this.props
    const menuCls = isShow ? 'nav-menu show' : 'nav-menu'
    return (
      <View className={menuCls}>
        <View className='close'>X</View>
        <View className='menu'>
          <View className='item'>首页</View>
          <View className='item'>
            <View className='cat title'>分类</View>
            <View className='cat-list'>
            {
              categoryList && categoryList.map((cat, idx) => (<View key={idx}>{cat.name}</View>))
            }
            </View>
          </View>
          <View className='item'>
            <View className='archive title'>归档</View>
            <View className='archive-list'>
            {
              archiveList && Object.keys(archiveList).map((year, index) => (
                <View className='archive-year' key={index}>{`${year}年`}
                {
                  archiveList[year].map((month, id) => (
                    <View className='archive-month' key={id}>{`${month.archiveTime} (${month.numOfArticles})`}</View>
                  ))
                }
                </View>
              ))
            }
            </View>
          </View>
          <View className='item'>关于豆米</View>
          <View className='item'>关于本站</View>
        </View>
      </View>
    )
  }
}
