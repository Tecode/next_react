import React from 'react';
import { Link } from '../../routers';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import styles from './index.less';

function ChildPage({ appStore }) {
    console.log(toJS(appStore.treeData), appStore.name, '-----------');
    return(
        <React.Fragment>
            <Link route='/' params={{id: 65}}>
                <a className={styles.link} >首页</a>
            </Link>
            <h2 className={styles.text}>子页面{ appStore.name }</h2>
        </React.Fragment>
    )
}

export default inject('appStore')(observer(ChildPage));