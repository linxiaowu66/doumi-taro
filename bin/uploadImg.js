/* eslint-disable */
const oss = require('ali-oss');
const co = require('co');
const SDK = require('ali-cdn-sdk');
const path = require('path');
const fs = require('fs');
const ora = require('ora')
const pkg = require('../package.json');

const spinner = ora('start upload..., Please Wait!!!')
spinner.start()
// const config = require('./config')
const ROOT_PATH = path.resolve(__dirname, '../src/assets/bigImg')
const ENV = process.env.NODE_ENV === 'production' ? 'prod' : process.env.NODE_ENV;

if (!process.env.NODE_ENV) {
  spinner.fail('打包上传，请更换deploy命令！！！')
  process.exit('进程出错，异常退出')
}
// bucket: 'testdwbbucket',
// url: 'https://testdwbbucket.oss-cn-hangzhou.aliyuncs.com'

const store = oss({
  accessKeyId: 'LTAIEoTr6e2FrAds',
  accessKeySecret: 'VszQsT02YgoHhXgZYqxdSaiKk5JVTO',
  // bucket: 'testdwbbucket',
  bucket: 'assetsfordwd',
  region: 'oss-cn-hangzhou'
})
const SDKCONFIG = {
  accessKeyId: 'LTAIEoTr6e2FrAds',
  appSecret: 'VszQsT02YgoHhXgZYqxdSaiKk5JVTO',
  endpoint: 'https://cdn.aliyuncs.com',
  apiVersion: '2014-11-11',
}

function uplodaFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      files.forEach((fileName) => {
        const targetPath = path.join(dir, fileName);
        const stat = fs.statSync(targetPath);
        co(function* () {
          let name = targetPath.split('/bigImg/')[1]
          const onlyUploadImg = !!+process.env.onlyUploadImg

          console.log(`${pkg.name}/extra/images/${name} will be upload`, targetPath)

          return yield store.put(`${pkg.name}/extra/images/${name}`, targetPath); // eslint-disable-line
        }).then(function* (result) {
          return
            console.log(`${fileName} has been uploaded to oss :${result.name}`);
            // refresh webpack-assets.json
            // if (~result.name.indexOf('webpack-assets.json')) {
              const sdk = new SDK(SDKCONFIG);
              const res = yield sdk.RefreshObjectCaches({
                ObjectPath: `${pkg.name}/${ENV}/${pkg.version}/${fileName}`,
              });
              console.log('refreshFile:', `https://assets.dianwoda.cn/${pkg.name}/${ENV}/${pkg.version}/${fileName}`);
              console.log(res);
            // }
          })
      })
    }
  })
}

uplodaFiles(ROOT_PATH)


