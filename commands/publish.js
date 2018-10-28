const inquirer = require('inquirer')
const spawn = require('child_process').spawn;
const path = require('path')
// const Table = require('cli-table')
// const rm = require('rimraf')
const fs = require('fs-extra')
const ora = require('ora')
const temp = require('./temp.conf')

// inquirer.registerPrompt('selectLine', require('inquirer-select-line'));

const choicesTpl = [
  {
    type: 'list',
    message: 'Select the env:',
    name: 'env',
    choices: ['qa', 'qa1', 'qa2', 'qa3', 'prod'],
  },
  {
    type: 'list',
    message: 'build:',
    name: 'isdeploy',
    choices: ['upload bigImg', 'applets', 'h5(build only)', 'h5(build && upload)', 'NO'],
  },
]

module.exports = inquirer.prompt(choicesTpl).then((anwsers) => {
  const spinner = ora('start build..., Please Wait!!!')
  console.log(anwsers)
  spinner.start()
  spinner.info(`cwd: ${process.cwd()}`)
  try {
    let ls

    // if (anwsers.env === 'qa1') {
    //   fs.writeFileSync(path.resolve(__dirname, '../config/prod.js'), temp.qa1)
    // }
    // if (anwsers.env === 'production') {
      fs.writeFileSync(path.resolve(__dirname, '../config/prod.js'), temp[anwsers.env])
    // }

    switch (anwsers.isdeploy) {
      case 'upload bigImg':
        ls = spawn('npm', ['run', 'upload:img'], {
          env: Object.assign(process.env, { NODE_ENV: anwsers.env })
        })
        break;
      case 'applets':
        ls = spawn('npm', ['run', 'build'], {
          env: Object.assign(process.env, { NODE_ENV: anwsers.env })
        })
        break;
      case 'h5(build only)':
        ls = spawn('npm', ['run', 'build:h5'], {
          env: Object.assign(process.env, { NODE_ENV: anwsers.env })
        })
        break;
      case 'h5(build && upload)':
        ls = spawn('npm', ['run', 'upload'], {
          env: Object.assign(process.env, { NODE_ENV: anwsers.env })
        })
        break;
      default:
        break;
    }


    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
      // console.log(process.env)
    });

    ls.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log([
        "                   _ooOoo_",
        "                  o8888888o",
        "                  88\" . \"88",
        "                  (| -_- |)",
        "                  O\\  =  /O",
        "               ____/`---'\\____",
        "             .'  \\\\|     |//  `.",
        "            /  \\\\|||  :  |||//  \\",
        "           /  _||||| -:- |||||-  \\",
        "           |   | \\\\\\  -  /// |   |",
        "           | \\_|  ''\\---/''  |   |",
        "           \\  .-\\__  `-`  ___/-. /",
        "         ___`. .'  /--.--\\  `. . __",
        "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
        "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
        "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
        "======`-.____`-.___\\_____/___.-`____.-'======",
        "                   `=---='",
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
        "         佛祖保佑       永无BUG"
    ].join('\n'));

      // console.log(
      //   `
      //                          .::::.
      //                        .::::::::.
      //                       :::::::::::
      //                    ..:::::::::::'
      //                 '::::::::::::'
      //                   .::::::::::
      //              '::::::::::::::..
      //                   ..::::::::::::.
      //                 ''::::::::::::::::
      //                  ::::'':::::::::'        .:::.
      //                 ::::'   ':::::'       .::::::::.
      //               .::::'      ::::     .:::::::'::::.
      //              .:::'       :::::  .:::::::::' ':::::.
      //             .::'        :::::.:::::::::'      ':::::.
      //            .::'         ::::::::::::::'         ''::::.
      //        ...:::           ::::::::::::'              ''::.
      //       '''' ':.          ':::::::::'                  ::::..
      //                          '.:::::'                    ':'''''..
      //   `
      // )
      console.log(`子进程退出码：${code}, buil success, ${anwsers.isdeploy === 'h5(build && upload)' ? 'upload finish' : ''}`);
    });
    ls.on('error', (err) => {
      console.log(err);
    })
  } catch (err) {
    spinner.fail(err)
  }

  // fs.remove(`${process.cwd()}/${anwsers.name}/.git`, (err) => {
  //   err ? spinner.fail(err) : (() => {
  //     listTable([[anwsers.frame, anwsers.name]])
  //     spinner.succeed('New project has been initialized successfully!')
  //   })()
  //   process.exit()
  // });
})
