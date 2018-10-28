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
const ROOT_PATH = path.resolve(__dirname, '../dist/h5')
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

function createAssetsJson(dir) {
  let result = {}
  fs.readdir(path.resolve(__dirname, `../dist/h5/${pkg.version}/css`), (err, files) => {
    files.forEach(file => {
      // 获取入口资源文件
      if (file.match(/app.\w{20}.css$/)) {
        result.js = file
        const testPath = path.resolve(__dirname, '../dist/h5')
        const filePath = file.split('.')
        console.log('result......', result)
        result = { js: `${pkg.name}/${ENV}/${pkg.version}/js/app.${filePath[1]}.js`, css: `${pkg.name}/${ENV}/${pkg.version}/css/app.${filePath[1]}.css` }
        fs.writeFile(`${testPath}/assets.json`, JSON.stringify(result), (err) => {
          if (err) throw err;
          console.log('It\'s saved!');
        });
      }
    });
  })
  
}

function uplodaFiles(dir) {
  // 生成资源json文件

  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      files.forEach((fileName) => {
        const targetPath = path.join(dir, fileName);
        const stat = fs.statSync(targetPath);
        if (stat.isDirectory()) {
          uplodaFiles(targetPath, fileName);
        } else {
          co(function* () {
            let name = targetPath.split('/dist/h5/')[1]
            if (targetPath.indexOf(`/dist/h5/${pkg.version}`) > -1){
              name = targetPath.split(`/dist/h5/${pkg.version}/`)[1]
            }
            const onlyUploadImg = !!+process.env.onlyUploadImg

            console.log(`${pkg.name}/${ENV}/${pkg.version}/${name} will be upload`, targetPath)

            return yield store.put(`${pkg.name}/${ENV}/${pkg.version}/${name}`, targetPath); // eslint-disable-line
          }).then(function* (result) {
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
        }
      })
    }
  })
}

createAssetsJson()
uplodaFiles(ROOT_PATH)

co(function* () {
  yield store.put(`${pkg.name}/${ENV}/index.html`, path.resolve(__dirname, '../dist/h5/index.html')); // eslint-disable-line
  yield store.put(`${pkg.name}/${ENV}/assets.json`, path.resolve(__dirname, '../dist/h5/assets.json'));
  return yield store.put(`${pkg.name}/${ENV}/Dload.min.js`, path.resolve(__dirname, '../Dload/Dload.min.js'));
}).then(function* (result) {
  console.log(result)
  const sdk = new SDK(SDKCONFIG);
  const res = yield sdk.RefreshObjectCaches({
    ObjectPath: `${pkg.name}/${ENV}/index.html`,
  });
})


