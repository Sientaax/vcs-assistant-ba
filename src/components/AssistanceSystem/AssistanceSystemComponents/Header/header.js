import React from 'react';

import { Tabs } from 'antd';
import { HistoryOutlined, ReadOutlined, CloseOutlined } from '@ant-design/icons';
import { Description } from '../Description/description'
import { History } from '../History/history'

import './header.css';

export const Header = ({ isClosed }) => {

    const { TabPane } = Tabs;

    return (
        <div className='header-wrapper'>
            <Tabs defaultActiveKey="1">
                <TabPane tab={
                    <span>
                        <ReadOutlined /> Beschreibung
                    </span>} key="1">
                    <Description />
                </TabPane>
                <TabPane tab={
                    <span>
                        <HistoryOutlined /> Historie
                    </span>} key="2">
                    <History />
                </TabPane>
            </Tabs>
            <CloseOutlined onClick={() => isClosed()}/>
        </div>
    )
}