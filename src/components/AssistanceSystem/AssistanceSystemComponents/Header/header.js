import React from 'react';

import { Tabs } from 'antd';

import './header.css';

export const Header = () => {

    const { TabPane } = Tabs;

    return (
        <div className='header-wrapper'>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Beschreibung" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Historie" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
        </div>
    )
}