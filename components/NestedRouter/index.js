import React from 'react';
import styles from './index.less';
import { Router } from '../../routers';
import { observer, inject } from 'mobx-react';

function HomePage({ children, homeStore }) {
    return (
        <React.Fragment>
            <h2 className={styles.title}>嵌套路由!{homeStore.name}</h2>
            <p className={styles.click} onClick={() => {Router.pushRoute('link1')}}>子路由1</p>
            <p className={styles.click} onClick={() => {Router.pushRoute('link2')}}>子路由2</p>
            { children }
        </React.Fragment>
    );
}

export default inject('homeStore')(observer(HomePage));