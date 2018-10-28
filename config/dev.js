const getLocalIp = require('./ip')

module.exports = {
  env: {
    NODE_ENV: "'development'",
    IP: `'${getLocalIp()}'`,
    RUN_ENV: "'applets'"
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    host: `${getLocalIp()}`,
    // host: '192.168.102.244',
    port: 8086,
  }
}
