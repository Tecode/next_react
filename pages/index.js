import HomePage from '../components/HomePage';
import Head from 'next/head';

export default () => (
  <React.Fragment>
    <Head>
      <meta name="description" content="Helmet application" />
      <title>Home-Next-React</title>
    </Head>
    <HomePage />
  </React.Fragment>
);