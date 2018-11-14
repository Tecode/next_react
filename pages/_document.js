import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { Helmet } from "react-helmet";

export default class MyDocument extends Document {
  render() {
    const helmet = Helmet.renderStatic();
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();
    // console.log(this.props.buildManifest.pages, '----------------------->>>>>>>>>>>');
    return (
      <html lang="zh-cn" {...htmlAttrs}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
          />
          <link rel="manifest" href="static/manifest.json" />
          <link rel="icon" href="static/img/favicon.ico" />
          <link rel="stylesheet" href="/static/css/antd.min.css" />
          <title>Next_Project</title>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
        </Head>
        <body {...bodyAttrs}>
          <Main />
        </body>
        {helmet.script.toComponent()}
        <NextScript />
      </html>
    )
  }
}