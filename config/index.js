const pkg = require('../package.json')
const ish5 = process.argv.indexOf('h5') > -1

const config = {
  projectName: 'raytheon',
  designWidth: 750,
  sourceRoot: 'src',
  outputRoot: ish5 ? 'dist/h5' : 'dist/applets',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    },
  },
  defineConstants: {
    WWW: JSON.stringify('www')
  },
  weapp: {

  },
  h5: {
    publicPath: '/',
    staticDirectory: `${pkg.version}/static`,
    outputJsRoot: `${pkg.version}/js`,
    pkgversion: `${pkg.version}`,
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
