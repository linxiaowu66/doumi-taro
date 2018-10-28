const program = require('commander')
const { resolve } = require('path')

process.env.NODE_PATH = resolve(__dirname, '/../node_modules/')

const res = command => resolve(__dirname, '../commands/', command)

// program
//   .version(require('../package').version)

program
  .usage('<command>')


program
  .command('startPublish')
  .description('loading....')
  .alias('sp')
  .action(() => {
    require(res('../commands/publish'))
  })

program
  .command('list')
  .description('List all the templates')
  .alias('l')
  .action(() => {
    require(res('list'))
  })

program.parse(process.argv)

// if(!program.args.length){
//   program.help()
// }
