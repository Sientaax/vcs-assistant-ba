import React from 'react';

import './assistant.css';

import { Header } from './AssistanceSystemComponents/Header/header'

export const Assistant = ({ closeAssistant }) => {
    return (
        <div className='assistant-wrapper' id='assistant-wrapper'>
            <Header isClosed={() => closeAssistant()} />
        </div>
    )
}