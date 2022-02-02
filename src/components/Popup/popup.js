import React from 'react'

import './popup.css'

export const Popup = ({ closePupup }) => {
    return (
        <div className='popup-wrapper'>
            <p className='popup-placeholder'>Platzhalter</p>
            <p className='popup-explanation'>Bitte beschreibe kurz was gemacht wurde.</p>
            <button className='pop-up-confirmation-modal-yes' onClick={() => closePupup()}>Okay</button>
        </div>
    )
}