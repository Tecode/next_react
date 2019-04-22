<p align="center">
<img alt="图片" src="static/images/next.png">
<img width="140" alt="图片" src="static/images/antd.png">
<img width="120" alt="图片" src="static/images/mobx.png">
</p>

Next.js是服务端渲染呈现的React应用程序的简约框架,这个项目通过配置Next.js+Mbox实现的一个Demo.

## 模块

+ react-helmet
+ mobx v5.0.3
+ next
+ less
+ Express v4.16.3
+ React v16.4.2
+ next-routes
+ antd v3.9.2

## 预览图
<p align="center">
<img alt="图片" src="static/images/Screenshot from 2019-04-22 11-51-34.png">
<img alt="图片" src="static/images/Screenshot from 2019-04-22 11-51-48.png">
</p>


## 功能

+ 服务端渲染
+ js按需加载
+ Mobx状态管理器

## 其它

### 使用了动态路由跳转使用next-routes提供的方法

#### 路由声明`routers/index.js`

```js
const routes = require('next-routes');

module.exports = routes()
.add('demo', '/demo/:id', 'demo')
.add('nestedRouter', '/nested_router', 'nestedRouter')
.add('link1', '/nested_router/link1', 'nestedRouter/link1')
.add('link2', '/nested_router/link2', 'nestedRouter/link2')
.add('netWork', '/netWork', 'netWork')
.add('structChart', '/struct_chart', 'structChart')
```

#### 使用`Link`路由跳转

```js
import {Link} from '../routes'

export default () => (
  <div>
    <div>Welcome to Next.js!</div>
    <Link route='blog' params={{slug: 'hello-world'}}>
      <a>Hello world</a>
    </Link>
    或者
    <Link route='/blog/hello-world'>
      <a>Hello world</a>
    </Link>
  </div>
)
```
#### 使用`Router`跳转路由

```js
import React from 'react'
import {Router} from '../routes'

export default class Blog extends React.Component {
  handleClick () {
    // With route name and params
    Router.pushRoute('blog', {slug: 'hello-world'})
    // With route URL
    Router.pushRoute('/blog/hello-world')
  }
  render () {
    return (
      <div>
        <div>{this.props.url.query.slug}</div>
        <button onClick={this.handleClick}>Home</button>
      </div>
    )
  }
}
```
## 如何使用

### 安装

```bash
npm install 或 yarn(推荐)
```
### 开发环境运行
```bash
npm run dev
```
### 产品环境运行
```bash
npm start
```
### 打包HTML静态文件
```bash
npm run biuld
```