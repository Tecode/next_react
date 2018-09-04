import Reacr from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import styles from './index.less';

function ChildPage({ appStore }) {
    console.log(toJS(appStore.treeData), appStore.name, '-----------');
    return(
        <React.Fragment>
            <Link href={{ pathname: "/", query: { id: 1} }}>
                <a className={styles.link}>首页</a>
            </Link>
            <h2 className={styles.text}>子页面{ appStore.name }</h2>
        </React.Fragment>
    )
}

export default inject('appStore')(observer(ChildPage));