import React from 'react';
import cowsay from 'cowsay-browser';
import styles from './index.less';
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';
import { toJS } from 'mobx';
import { Router } from '../../routers';

function HomePage({ homeStore, appStore }) {
    return (
        <React.Fragment>
            <h2 className={styles.title}>Hello World!{homeStore.name}</h2>
            <Button type="primary" onClick={() => { Router.pushRoute('/demo/455') }}>动态路由</Button>
            &nbsp;&nbsp;
            <Button type="primary" onClick={() => { Router.pushRoute('/nested_router') }}>嵌套路由</Button>
            <pre>
                {cowsay.say({ text: 'hi there!' })}
            </pre>
            <p>{appStore.name}</p>
            <ul>
                {
                    toJS(appStore.treeData.data).map((item, index) => (<li key={index}>{item.name + '--' + item.project_id + '--' + item.uid}</li>))
                }
            </ul>
        </React.Fragment>
    );
}

export default inject('homeStore', 'appStore')(observer(HomePage));