import React from 'react';
import cowsay from 'cowsay-browser';
import styles from './index.less';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';

function HomePage({ homeStore }) {
    return (
        <React.Fragment>
            <h2 className={styles.title}>Hello World!{homeStore.name}</h2>
            <p onClick={() => {Router.push('/demo')}}>子页面</p>
            <pre>
                {cowsay.say({ text: 'hi there!' })}
            </pre>
        </React.Fragment>
    );
}

export default inject('homeStore')(observer(HomePage));