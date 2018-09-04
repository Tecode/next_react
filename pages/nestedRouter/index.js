import { Helmet } from "react-helmet";
import Body from '../../components/NestedRouter';

export default (props) => (
    <React.Fragment>
        <Helmet>
            <meta name="description" content="嵌套路由" />
            <title>嵌套路由</title>
        </Helmet>
        {console.log(props, '--------------props')}
        <Body>5</Body>
    </React.Fragment>);