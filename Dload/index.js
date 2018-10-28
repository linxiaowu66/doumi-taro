import Ajax from './ajax';
// import config from '../config'

var pkg = require('../package.json');

// var env = process.env.NODE_ENV
var env = process.env.NODE_ENV

var host = '//assets.dianwoda.cn/'

var path = pkg.name + '/' + env

var webpackAssets = {
  development: '//192.168.100.194:9100/webpack-assets.json',
  qa: host + path + '/assets.json?v=' + new Date().getTime(),
  qa1: host  + path + '/assets.json?v=' + new Date().getTime(),
  // qa2: `//assets.dianwoda.cn/${pkg.name}/qa2/assets.json`,
  qa3: host  + path + '/assets.json?v=' + new Date().getTime(),
  prod: host + path + '/assets.json?v=' + pkg.version
}[env];

var protocol = location.protocol;

function loadStyle(href) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.body.appendChild(link);
}

function loadScript(src, options, cb) {
  var script = document.createElement('script');
  for (var opt in options) {
    script.setAttribute(opt, options[opt]);
  }
  script.onload = function () {
    cb && cb();
  }
  script.src = src;
  document.body.appendChild(script);
}

function loadAsserts() {
  Ajax({
    url: webpackAssets,
    success: function(res) {
      var result = JSON.parse(res);
      var styles = result.css;
      var javascripts = result.js;
      if (styles) {
        loadStyle(host + styles);
      }
      if (javascripts) {
        loadScript(host + javascripts, {
          defer: true
        })
      }
    },
    error: function(err) {
      console.log(err)
    }
  })
}
loadAsserts();
