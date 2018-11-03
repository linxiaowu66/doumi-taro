## 豆米博客小程序 && h5 && RN

## 命令说明(注：node >= 8.12.0)

```bash
 $ yarn dev:h5    # h5本地开发
 $ yarn dev       # 微信小程序本地开发
 $ yarn build     # 微信小程序打包
 $ yarn build:h5  # h5打包
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
|   |-- index.html           # 你懂的
```
