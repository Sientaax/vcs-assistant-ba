import React from 'react'

import './systemStatus.css'

export const SystemStatus = () => {
    return (
        <>
            <hr className='systemStatus-line' />
            <div className='systemStatus-wrapper'>
                <span className='systemStatus-circle'></span>
                <p className='systemStatus-info'>Assistenzsystem aktiv</p>
            </div>
        </>
    )
}