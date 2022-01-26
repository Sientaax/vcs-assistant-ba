import React from 'react';

import './notification.css';

export const Notification = ({ clickListener }) => {
    return(
        <div className='notification-wrapper' onClick={() => clickListener()}>
            <p className='notification-text'>Bitte beschreibe deine letzten Schritte</p>
            <img className='notification-icon' src='/assets/up-arrow.png' alt='upArrow' />
        </div>
    )
}