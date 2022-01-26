import React from 'react';

import { Tabs } from 'antd';
import { Description } from '../Description/description'
import { History } from '../History/history'

import './header.css';

export const Header = () => {

    const { TabPane } = Tabs;

    return (
        <div className='header-wrapper'>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Beschreibung" key="1">
                    <Description />
                </TabPane>
                <TabPane tab="Historie" key="2">
                    <History />
                </TabPane>
            </Tabs>
        </div>
    )
}