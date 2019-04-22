import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import Head from 'next/head';

export default class MyDocument extends Document {
  render() {
    // console.log(this.props.buildManifest.pages, '----------------------->>>>>>>>>>>');
    return (
      <html lang="zh-cn">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
          <title>Next_Project</title>
        </Head>
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="icon" href="/static/manifest/icon/favicon-32x32.png" />
        <link rel="stylesheet" href="/static/css/antd.min.css" />
        <body>
          <Main />
        </body>
        <NextScript />
      </html>
    )
  }
}