import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Footer from '../../components/Footer'
import Widget from '../../components/Widget'
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { fetchArticleListByPage } from '../../actions/index'

import './list.scss'

@connect(({ articleReducer }) => ({
  articleReducer
}), (dispatch) => ({
  async fetchArticleListByPage(res) {
    return await dispatch(fetchArticleListByPage(res))
  },
}))
class ArticleList extends Component {
  config = {
    navigationBarTitleText: '博客列表'
  }
  constructor() {
    super(...arguments)
    this.state = ({
      isShowMenu: false
    })
  }
  async componentWillMount() {
    this.props.fetchArticleListByPage(10)
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navToArticleDetail = (detail) => {
    Taro.navigateTo({ url: `/pages/article/detail?slug=${detail.slug}` })
  }

  showMenu = () => {
    this.setState({
      isShowMenu: true
    })
  }

  render () {
    const { articleList } = this.props.articleReducer
    const { isShowMenu } = this.state
    return (
      <View className='list-container'>
        <Header showMenu={this.showMenu} />
        <View className='bread-crumb'>
          <Text>首页</Text>
          <Text>/ 博文列表</Text>
        </View>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          style='height: 100vh;'
          lowerThreshold='20'
          upperThreshold='20'
          onScrolltoupper={this.onScrolltoupper}
          onScroll={this.onScroll}
        >
        {
          articleList && articleList.map(article => (
            <View className='article-block' onClick={this.navToArticleDetail.bind(this, article)} key={article.id}>
              <View className='title'>{article.title}</View>
              <View className='ribble'>
                {article.archiveTime}
              </View>
              <Image src={article.picture} />
              <View className='brief'>
                <Text>{article.digest}</Text>
              </View>
              <View className='nav-to-detail'>阅读全文</View>
            </View>
          ))
        }
        </ScrollView>
        <Menu isShow={isShowMenu} />
        <Widget />
        <Footer />
      </View>
    )
  }
}

export default ArticleList
