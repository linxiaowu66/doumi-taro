const getLocalIp = require('./ip')
    module.exports = {
      env: {
        NODE_ENV: "'qa1'",
        IP: "'192.168.101.60'"
      },
      defineConstants: {
      },
      weapp: {},
      h5: {
        publicPath: "https://assets.dianwoda.cn/raytheon/qa1/"
      }
    }