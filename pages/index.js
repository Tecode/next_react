import HomePage from '../components/HomePage';
import { Helmet } from "react-helmet";

export default () => (
    <React.Fragment>
        <Helmet>
            <meta name="description" content="Helmet application" />
            <title>Home-Next-React</title>
        </Helmet>
        <HomePage />
    </React.Fragment>
);