import ChildPage from '../components/ChildPage';
import Head from 'next/head';

export default () => (
  <React.Fragment>
    <Head>
      <meta name="description" content="Helmet application" />
      <title>Child-Next-React</title>
    </Head>
    <ChildPage />
  </React.Fragment>);