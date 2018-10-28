/* eslint-disable react/jsx-curly-brace-presence */
import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import Bscroll from 'better-scroll'
// 坑：外容器如果是遍历渲染组件，组件内部不能引入自定义组件，否则会小程序编译不通过，无语....
// import Dotting from './../dotting/index'
// import ListViewFooter from './../listView/footer'

import './index.scss'
import './../dotting/index.scss'
import './../listView/footer.scss'

const SCROLL_OPTIONS = {
  probeType: 1, // 1-非实时派发scroll，2-屏幕滚动时实时派发 3-屏幕滚动及动画运行过程中实时派发
  // 下拉刷新
  pullDownRefresh: {
    threshold: 90,                    // 顶部下拉的距离，决定刷新时机
    stop: 0,                          // 回弹停留的距离
    pullDownTxt: '数据加载完成',
  }, 
  // 上拉加载
  pullUpLoad: {
    threshold: 0,                     // 顶部下拉的距离，决定刷新时机
    stop: 0,                          // 回弹停留的距离
    pullUpTxt: '上拉加载',
    noMoreDataTxt: '数据加载完成',
  }, // 默认支持上拉加载
  refresh: 20,
  deceleration: 0.002,                // 表示 momentum 动画的减速度
  // useTransition: false,
}
export default class ListView extends Component {

  constructor() {
    super(...arguments)
    this.state = {}
  }

  componentDidMount() {
    console.log('component did mount....')
    if (Taro.getEnv() === 'WEB') {
      if (this.scroll) {
        this.scroll.refresh()
      } else {
        this.initBScroll()
      }
    }
  }

  componentWillUnmount() {
    this.scroll && this.scroll.destroy()
  }

  componentWillReceiveProps(nextProps) {
    // 数据请求完成
    if (nextProps.refreshing !== this.props.refreshing && !nextProps.refreshing) {
      // 告诉 better-scroll 数据已加载
      this.scroll && this.scroll.finishPullUp()
      this.scroll && this.scroll.finishPullDown()
      setTimeout(() => {
        this.scroll && this.scroll.refresh()
      }, 0);
    }
  }

  initBScroll = () => {
    console.log('init better scroll....', this.props.id)
    const options = {
      probeType: SCROLL_OPTIONS.probeType,
      pullDownRefresh: SCROLL_OPTIONS.pullDownRefresh,
      pullUpLoad: SCROLL_OPTIONS.pullUpLoad,
      startY: 0,
      scrollY: true,
      scrollX: false,
      click: true,
      scrollbar: false,
      freeScroll: false,
      bounceTime: 1000,
    }
    const { id, onRefresh, onLoadMore } = this.props
    const wrapper = document.querySelector(`#${id}`)
    this.scroll = new Bscroll(wrapper, options)
    this.scroll.on('pullingDown', () => {
      console.log('process pullingDown...')
      typeof onRefresh === 'function' && onRefresh()
    })
    this.scroll.on('pullingUp', () => {
      console.log('process pullingUp...')
      typeof onLoadMore === 'function' && onLoadMore()
    })
  }

  render() {
    Taro.getEnv() === 'WEAPP'
    const { id, isEmpty, loadable, children, loadClass, footerText } = this.props
    return (
      <View id={id} className='wrapper'>
        <View className='wrapper-content'>
        <View className={`dotting-container ${loadClass}`}>
          <View className='dotting dotting-1' />
          <View className='dotting dotting-2' />
          <View className='dotting dotting-3' />
        </View>
          {children}
          { !isEmpty && !loadable&&
            <View className='list-view-footer'>
              <Text>{footerText}</Text>
            </View>
          }
        </View>
      </View>
    )
  }
}

ListView.defaultProps = {
  footerText: '没有更多了'
}
