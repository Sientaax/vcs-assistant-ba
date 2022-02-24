import React from 'react'

import './popup.css'

export const Popup = ({ closePupup, popupReason, popupDescription }) => {
    return (
        <div className='popup-wrapper'>
            <p className='popup-placeholder'>{popupReason}</p>
            <p className='popup-explanation'>{popupDescription}</p>
            <button className='pop-up-confirmation-modal-yes' onClick={() => closePupup()}>Okay</button>
        </div>
    )
}