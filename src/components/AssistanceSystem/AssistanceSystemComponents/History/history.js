import React from 'react'

import './history.css'

export const History = () => {
    return (
        <>
            <div>
                <div>
                    <p>17.05.2000</p>
                    <p>feat(userInterface)/implemented-the-interface</p>
                </div>
                <img src='/assets/down-arrow.png' alt='arrowUp' />
            </div>
            <div>
                <div>
                    <p>20.05.2000</p>
                    <p>feat(content)/implemented-the-content</p>
                </div>
                <img src='/assets/down-arrow.png' alt='arrowUp' />
            </div>
            <div>
                <div>
                    <p>23.05.2000</p>
                    <p>fix(content)/spelling</p>
                </div>
                <img src='/assets/down-arrow.png' alt='arrowUp' />
            </div>
        </>
    )
}