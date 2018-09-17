<img width="112" alt="screen shot 2016-10-25 at 2 37 27 pm" src="https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png">

[![NPM version](https://img.shields.io/npm/v/next.svg)](https://www.npmjs.com/package/next)
[![Build Status](https://travis-ci.org/zeit/next.js.svg?branch=master)](https://travis-ci.org/zeit/next.js)
[![Build status](https://ci.appveyor.com/api/projects/status/gqp5hs71l3ebtx1r/branch/master?svg=true)](https://ci.appveyor.com/project/arunoda/next-js/branch/master)
[![Coverage Status](https://coveralls.io/repos/zeit/next.js/badge.svg?branch=master)](https://coveralls.io/r/zeit/next.js?branch=master)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/next-js)

Next.js是服务端渲染呈现的React应用程序的简约框架,这个项目通过配置Next.js+Mbox实现的一个Demo.

---
## 模块

+ react-helmet
+ mobx v5.0.3
+ next
+ less
+ Express v4.16.3
+ React v16.4.2
+ next-routes
+ antd v3.9.2

## 功能

+ SSR
+ Automatic code splitting

## 其它
### 使用了动态路由跳转使用next-routes提供的方法
+ Link example

```bash
import {Link} from '../routes'

export default () => (
  <div>
    <div>Welcome to Next.js!</div>
    <Link route='blog' params={{slug: 'hello-world'}}>
      <a>Hello world</a>
    </Link>
    or
    <Link route='/blog/hello-world'>
      <a>Hello world</a>
    </Link>
  </div>
)
```
+ Router example

```bash
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
npm install
or
yarn(推荐)
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