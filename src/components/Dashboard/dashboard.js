import React from 'react'

import { SaveOutlined, FileSearchOutlined, EditOutlined } from '@ant-design/icons';

import './dashboard.css'

export const Dashboard = () => {
    return (
        <div className='dashboard-wrapper'>
            <p className='dashboard-title'>Platzhalter</p>
            <p className='dashboard-explanation'>Platzhalter ist ein Assistenzsystem, dass dich in gewissen Abständen dazu auffordert deinen geschriebenen Code zu speichern.</p>
            <p className='dashboard-advantages'>Was mache ich alles möglich?</p>
            <div className='dashboard-advantages-wrapper'>
                <div className='dashboard-advantages-save'>
                    <SaveOutlined />
                    <p>Code speichern</p>
                </div>
                <div className='dashboard-advantages-watch'>
                    <FileSearchOutlined />
                    <p>Ältere Versionen des Codes einsehen</p>
                </div>
                <div className='dashboard-advantages-work'>
                    <EditOutlined />
                    <p>Erneutes Arbeiten von dem Stand einer älteren Version</p>
                </div>
            </div>
            <div className='dashboard-time'>
                <p className='dashboard-time-text'>Bisherige Arbeitszeit:</p>
                <p className='dashboard-time-number'>00:00:15</p>
            </div>
            <div className='dashboard-versions'>
                <p className='dashboard-versions-text'>Anzahl der gespeicherten Versionen:</p>
                <p className='dashboard-versions-number'>10</p>
            </div>
        </div>
    )
}