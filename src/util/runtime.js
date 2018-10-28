/* eslint-disable */

/**
 *
 * @param {*} hybridParams
 */
function callHandler(data) {console.log(data)
  let successCallbackName = ''
  let failCallBackName = ''
  if (data.onSuccess) {
    /* 将onSuccess挂载到window.jsBridge下 */
    window.jsBridge[`${data.name}Success`] = data.onSuccess
    successCallbackName = `jsBridge.${data.name}Success`
  }
  if (data.onFail) {
    window.jsBridge[`${data.name}Fail`] = data.onFail
    failCallBackName = `jsBridge.${data.name}Fail`
  }

  const newData = {
    name: data.name,
    params: data.params,
    onSuccess: successCallbackName,
    onFail: failCallBackName
  }
  if (window.webkit) {
    window.webkit.messageHandlers.callHandler.postMessage(newData)
  } else {
    if (window.dianwoda && typeof window.dianwoda.callHandler === 'function') {
      window.dianwoda.callHandler(JSON.stringify(newData))
    }
  }
};

function isNative() {
  const ua = navigator.userAgent.toLowerCase()
  const isRunOnDwdApp = !!ua.match(/dianwoda/i)
  if (!window.jsBridge) {
    window.jsBridge = {
      hybrid: {
        registerHandler: (res) => {
          if (res.name === 'ready') {
            if (res.status === 1) {
              console.log({ status: 1, msg: '' })
            } else {
              alert('页面加载失败, 请重试...')
            }
          }
        }
      }
    }
  } else {
    // alert('挂载API出错!')
  }
  return isRunOnDwdApp
}

/**
 * 在点我达APP下设置Title
 *
 * @param {Runtime.DwdTitleData} params
 */
function setHeader(params) {
  isNative()
  if (typeof params.title === 'undefined') {
    throw new Error('标题未定义')
  }
  let leftBtnFunName = ''
  if (params.leftBtn && params.leftBtn.onClick) {
    /* 将左边按钮的onClick挂载到window.jsBridge下 */
    window.jsBridge.setLeftBtnOnClick = params.leftBtn.onClick
    leftBtnFunName = 'jsBridge.setLeftBtnOnClick'
  }

  /* 将右边按钮组的onClick挂载到window.jsBridge下 */
  let newParams = []
  params.rightBtns && params.rightBtns.map((item, index) => {
    let rightBtnFunName = ''
    if (item.onClick) {
      window.jsBridge[`setRightBtnOnClick${index}`] = item.onClick
      rightBtnFunName = `jsBridge.setRightBtnOnClick${index}`
    }
    newParams.push({
      'onClick': rightBtnFunName,
      'text': item.text,
      'color': item.color || '#fe751a',
      'image': item.image,
      'redIcon': item.redIcon || false
    })
  })
  params.title && callHandler({
    name: 'setHeaderTitle',
    params: { title: params.title },
  })
  leftBtnFunName && callHandler({
    name: 'setLeftHeader',
    params: { button: { 'onClick': leftBtnFunName } }
  })
  newParams.length > 0 && callHandler({
    name: 'setRightHeader',
    params: { buttons: newParams }
  })
}

/**
 * 在点我达APP下关闭掉H5页面
 *
 */
function closeWindow() {
  callHandler({
    name: 'close'
  })
}

/**
 * 在点我达APP下调用打电话
 *
 * @param {any} element
 */
function callPhone(params) {
  isNative()
  callHandler({
    name: 'call',
    params,
  })
}

/**
 * 点我达APP下webview发送消息给别的webview
 *
 * @param {Runtime.postMessageParam} params
 * @returns {Promise}
 */
function postMessage(params, name) {
  isNative()
  return new Promise((resolve, reject) => {
    callHandler({
      name: name || 'postMessage',
      params,
      onSuccess: resolve,
      onFail: reject
    })
  })
};

/**
 * 点我达APP Native页面跳转
 *
 * @param {Runtime.DwdForwardToNativeData}
 */
function forwardToNative(params) {
  isNative()
  callHandler({
    name: 'forward',
    params: { topage: params.topage, type: params.type, params: params.params }
  })
}

const exportsApi = {
  setHeader,
  closeWindow,
  callPhone,
  postMessage,
  forwardToNative
}

export default exportsApi
