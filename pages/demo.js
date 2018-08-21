import ChildPage from '../components/ChildPage';
import { Helmet } from "react-helmet";

export default () => (
    <React.Fragment>
        <Helmet>
            <meta name="description" content="Helmet application" />
            <title>Child-Next-React</title>
        </Helmet>
        <ChildPage />
    </React.Fragment>);