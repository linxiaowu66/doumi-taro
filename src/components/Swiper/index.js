import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class DouMiSwiper extends Component {
  static propTypes = {
    banner: PropTypes.array,
    home: PropTypes.bool,
  };

  static defaultProps = {
    banner: [],
    home: false,
  };

  navTo = (link) => {
    if (link === '/pages/home/index' || link === '/pages/article/list' || link === 'pages/about/doumi') {
      Taro.switchTab({ url: link })
      return
    }
    Taro.navigateTo({ url: link })
  }

  render() {
    const { banner, home } = this.props;
    return (
      <Swiper
        className={!home ? 'swiper-container' : 'swiper'}
        circular
        indicatorDots
        indicatorColor='#999'
        indicatorActiveColor='#119d55'
        autoplay
      >
        {banner.map((item, index) => (
          <SwiperItem key={index}>
            <Image mode='widthFix' src={`${item.image_src}`} onClick={this.navTo.bind(this, item.link)} />
          </SwiperItem>
        ))}
      </Swiper>
    );
  }
}
