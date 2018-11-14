import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class NetWork extends Component {
  componentDidMount() {
    console.log(d3);
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>My Title</title>
          <script src="https://d3js.org/d3.v5.min.js"></script>
        </Helmet>
      </React.Fragment>
    );
  }
}