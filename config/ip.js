const os = require('os')
/* eslint-disable */
function getLocalIp() {
  let IPv4 = '0.0.0.0';
  try {
    if (process.platform === 'darwin') {
      for (let i = 0; i < os.networkInterfaces().en0.length; i++) {
        if (os.networkInterfaces().en0[i].family === 'IPv4') {
          IPv4 = os.networkInterfaces().en0[i].address;
        }
      }
    } else if (process.platform === 'win32') {
      for (let i = 0; i < os.networkInterfaces()['本地连接'].length; i++) {
        if (os.networkInterfaces()['本地连接'][i].family === 'IPv4') {
          IPv4 = os.networkInterfaces()['本地连接'][i].address;
        }
      }
    } else if (process.platform === 'linux') {
      const nets = os.networkInterfaces()
      for (let i = 0; i < nets.enp0s31f6.length; i++) {
        if (nets.enp0s31f6[i].family === 'IPv4') {
          IPv4 = nets.enp0s31f6[i].address;
        }
      }
    }
  } catch (e) {
    console.info(e, '开发信息，qa及线上请忽略本错误')
  }
  return IPv4;
}

module.exports = getLocalIp
