import React from 'react'

import './systemStatus.css'

export const SystemStatus = ({ isAssistantActive }) => {
    return (
        <>
            <hr className='systemStatus-line' />
            <div className='systemStatus-wrapper'>
                {isAssistantActive === true ?
                    <>
                        <span className='systemStatus-circle-green'></span>
                        <p className='systemStatus-info'>Verbunden mit IntelliJ</p>
                    </> :
                    <>
                        <span className='systemStatus-circle-red'></span>
                        <p className='systemStatus-info'>Nicht mit IntelliJ verbunden</p>
                    </>
                }
            </div>
        </>
    )
}