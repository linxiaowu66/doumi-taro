/* eslint-disable no-undef */
class Cainiao {
  constructor(options) {
    this.options = options
  }

  setHeader = (params) => {
    if (typeof params.title === 'undefined') {
      throw new Error('标题未定义')
    } else if (typeof terra !== 'undefined' && terra){
      terra.setTitle(params.title)
    }
    // 设置左侧按钮
    if (params.leftBtn && params.leftBtn.onClick) {
      terra.regBackCatcher(function () {
        params.leftBtn.onClick()
      })
    }
    // TODO: 设置右侧按钮, 菜鸟的貌似不支持传数组
    if (params.rightBtns && params.rightBtns.length > 0) {
      terra.setRightItem ({ text: params.rightBtns[0].text }).then(() => {
        //设置成功
        console.log('set right buttons success....')
        terra.on('optionMenuPressed', () => {
          //点击回调
          params.rightBtns[0].onClick()
        }, this);
      }, () => {
        console.log('set right buttons error....')
      });
    }
  }
  /**
   * 调用菜鸟裹裹APP分享
   *
   */
  share = (params, success, error) => {
    if (typeof terra !== 'undefined' && terra){
      terra.share(params).then(() => {
        terra.on('resume', () => {
          success && success()
          terra.off('resume')
        });
        
      }, (msg) => {
        error && error(msg)
      })
    }
  }

  /**
   * 在菜鸟裹裹APP下关闭掉H5页面
   *
   */
  closeWindow = (data) => {
    if (typeof terra !== 'undefined' && terra) {
      terra.popWindow(data)
    }
  }

  /**
   * 在菜鸟裹裹APP下调用打电话
   *
   * @param {any} element
   */
  callPhone = (params) => {
    // 暂时未对接，采用<a tel: />
    console.log('cn callPhone params:', params)
  }

  /**
   * 在菜鸟裹裹APP下webview发送消息给别的webview
   *
   * @param {Runtime.postMessageParam} params
   * @returns {Promise}
   */
  postMessage = (params, name) => {
    // 暂时未对接
    console.log('cn postMessage params:', params, name)
  };

  /**
   * 在菜鸟裹裹APP Native页面跳转
   *
   * @param {Runtime.DwdForwardToNativeData}
   */
  forwardToNative = (data) => {
    // 暂时未对接
    console.log('cn postMessage params:', data)
  }
}

export default Cainiao