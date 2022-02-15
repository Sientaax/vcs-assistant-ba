import React from 'react'

import './popup.css'

export const Popup = ({ closePupup, popupReason }) => {
    return (
        <div className='popup-wrapper'>
            <p className='popup-placeholder'>{popupReason}</p>
            <p className='popup-explanation'>Bitte beschreibe kurz was du alles in der letzten Zeit gemacht hast.</p>
            <button className='pop-up-confirmation-modal-yes' onClick={() => closePupup()}>Okay</button>
        </div>
    )
}