## 豆米博客小程序 && h5 && RN

## 命令说明(注：node >= 8.12.0)

```bash
 $ yarn dev:h5    # h5本地开发
 $ yarn dev       # 微信小程序本地开发
 $ yarn build     # 微信小程序打包
 $ yarn build:h5  # h5打包
 $ yarn dev:bef   # 替换taro个别module(自带的不大适用)
```

## 项目结构说明
```
├── config                   # 全局基本配置
├── dist                     # 打包后的代码(自动生成)
│   ├── applets              # 微信小程序入口文件夹
│   └── h5                   # h5
├── src                      # 程序源文件
│   ├── components           # 公用组件
│   ├── assets               # 资源文件，如图片、音频、字体等
│   ├── constants            # 静态变量
│   ├── store                # redux
│   ├── util                 # 一些工具方法（unite api, httpRequest promises...）
│   ├── api                  # api
│   ├── pages                # 页面代码
│   ├── app.js               # 打包入口
│   └── main.js              # 小程序基本配置(页面跳转,窗口...)
├── packages                 # taro部分配置修改
└── index.html               # 你懂的
```
坑坑坑：
<1>taro component 组件事件绑定指向有错，官方修复中。。。
暂时解决方案：暂时可以换个名字定义另外一个方法绕过
<2>事件方法 若以 bind / handle 为开头导致传参时无法正常使用bind,
    && 方法名字数超过14个时也会导致bind绑定报错

持续填坑中...
