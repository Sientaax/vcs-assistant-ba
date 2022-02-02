import React from 'react';

import './assistant.css';

import { Header } from './Header/header'
import { SystemStatus } from './SystemStatus/systemStatus'
import { Description } from './Description/description'
import { Popup } from './Popup/popup'

export const Assistant = () => {
    const isClicked = () => {
        document.getElementById('description-hidden').classList.remove('description-hidden')
        document.getElementById('header-hidden').classList.add('header-hidden')
    }

    const shutDownDescription = () => {
        document.getElementById('description-hidden').classList.add('description-hidden')
        document.getElementById('header-hidden').classList.remove('header-hidden')
    }

    const shutDownPopup = () => {
        document.getElementById('popup-hidden').classList.add('popup-hidden')
    }

    const shutDownPopupDescription = () => {
        document.getElementById('popup-hidden-wrapper').classList.add('popup-hidden-wrapper')
        document.getElementById('header-hidden').classList.remove('header-hidden')
    }

    return (
        <div className='assistant-wrapper' id='assistant-wrapper'>
            <div className='' id='header-hidden'>
                <Header openDescription={isClicked} />
            </div>
            <SystemStatus />
            <div className='description-hidden' id='description-hidden'>
                <Description closeDescription={shutDownDescription} />
            </div>
            <div className='popup-hidden-wrapper' id='popup-hidden-wrapper'>
                <div className='' id='popup-hidden'>
                    <Popup closePupup={shutDownPopup} />
                </div>
                <Description closeDescription={shutDownPopupDescription} />
            </div>
        </div>
    )
}