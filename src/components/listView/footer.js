import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import './footer.scss'

export default class ListViewFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { text } = this.props
    return (
      <View className='list-view-footer'>
        <Text>{text}</Text>
      </View>
    )
  }
}

ListViewFooter.defaultProps = {
  text: '没有更多了'
}