import React, { Component } from 'react';
import Head from 'next/head';

export default class NetWork extends Component {
  componentDidMount() {
    console.log(d3);
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>My Title</title>
          <script src="https://d3js.org/d3.v5.min.js"></script>
        </Head>
      </React.Fragment>
    );
  }
}