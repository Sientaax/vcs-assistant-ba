import React from 'react';

import { Tabs } from 'antd';
import { HistoryOutlined, DashboardOutlined } from '@ant-design/icons';
import { Dashboard } from '../Dashboard/dashboard'
import { History } from '../History/history'

import './header.css'

export const Header = ({ openDescription }) => {

    const { TabPane } = Tabs;

    return (
        <div className='header-wrapper'>
            <Tabs defaultActiveKey="1">
                <TabPane tab={
                    <span>
                        <DashboardOutlined /> Dashboard
                    </span>} key="1">
                    <Dashboard />
                </TabPane>
                <TabPane tab={
                    <span>
                        <HistoryOutlined /> Historie
                    </span>} key="2">
                    <History isOpen={() => openDescription()} />
                </TabPane>
            </Tabs>
        </div>
    )
}