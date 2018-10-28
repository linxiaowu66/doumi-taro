const getLocalIp = require('../config/ip')

module.exports = {
  dev: `const getLocalIp = require('./ip')
    module.exports = {
      env: {
        NODE_ENV: "'development'",
        IP: "'${getLocalIp()}'"
      },
      defineConstants: {
      },
      weapp: {},
      h5: {
        host: '192.168.102.244',
        port: 8086,
      }
    }`,
  qa: `const getLocalIp = require('./ip')
    module.exports = {
      env: {
        NODE_ENV: "'qa'",
        IP: "'${getLocalIp()}'"
      },
      defineConstants: {
      },
      weapp: {},
      h5: {
        publicPath: "https://assets.dianwoda.cn/raytheon/qa1/"
      }
    }`,
  qa1: `const getLocalIp = require('./ip')
    module.exports = {
      env: {
        NODE_ENV: "'qa1'",
        IP: "'${getLocalIp()}'"
      },
      defineConstants: {
      },
      weapp: {},
      h5: {
        publicPath: "https://assets.dianwoda.cn/raytheon/qa1/"
      }
    }`,
  qa2: `const getLocalIp = require('./ip')
    module.exports = {
      env: {
        NODE_ENV: "'qa2'",
        IP: "'${getLocalIp()}'"
      },
      defineConstants: {
      },
      weapp: {},
      h5: {
        publicPath: "https://assets.dianwoda.cn/raytheon/qa2/"
      }
    }`,
  qa3: `const getLocalIp = require('./ip')
    module.exports = {
      env: {
        NODE_ENV: "'qa3'",
        IP: "'${getLocalIp()}'"
      },
      defineConstants: {
      },
      weapp: {},
      h5: {
        publicPath: "https://assets.dianwoda.cn/raytheon/qa3/"
      }
    }`,
  prod: `const getLocalIp = require('./ip')
    module.exports = {
      env: {
        NODE_ENV: "'production'",
        IP: "'${getLocalIp()}'"
      },
      defineConstants: {
      },
      weapp: {},
      h5: {
        publicPath: "https://assets.dianwoda.cn/raytheon/prod/"
      }
    }
    `
}
