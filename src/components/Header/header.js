import React from 'react';

import { Tabs } from 'antd';
import { HistoryOutlined, DashboardOutlined } from '@ant-design/icons';
import { Dashboard } from '../Dashboard/dashboard'
import { History } from '../History/history'

import './header.css'

export const Header = ({ openDescription, workingTimeCounter, setLogCounter, getSpinnerValue, getSpinnerValueSecond }) => {

    const { TabPane } = Tabs;

    return (
        <div className='header-wrapper'>
            <Tabs defaultActiveKey="1">
                <TabPane tab={
                    <span>
                        <DashboardOutlined /> Dashboard
                    </span>} key="1">
                    <Dashboard countWorkingTime={workingTimeCounter} logCounter={setLogCounter} />
                </TabPane>
                <TabPane tab={
                    <span>
                        <HistoryOutlined /> Verlauf
                    </span>} key="2">
                    <History isOpen={() => openDescription()} isSpinner={getSpinnerValue} isSpinnerSecond={getSpinnerValueSecond} />
                </TabPane>
            </Tabs>
        </div>
    )
}