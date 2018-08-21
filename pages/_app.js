import App, {Container} from 'next/app';
import React from 'react';
import withMobxStore from '../helpers/with-mobx-store';
import { Provider } from 'mobx-react';

class MyApp extends App {
  render () {
    const {Component, pageProps, allStore} = this.props
    return (
      <Container>
        <Provider {...allStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withMobxStore(MyApp)