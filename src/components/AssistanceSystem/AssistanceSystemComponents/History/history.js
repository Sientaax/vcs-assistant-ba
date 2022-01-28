import React from 'react'

import './history.css'

export const History = () => {
    return (
        <div className='history-wrapper'>
            <div className='history-content-wrapper'>
                <div className='history-information'>
                    <p>17.05.2000</p>
                    <button className='history-load-branch-button'>Diesen Stand laden</button>
                </div>
                <p className='history-commit'>feat(userInterface)/implemented-the-interface</p>
            </div>
            <div className='history-content-wrapper'>
                <div className='history-information'>
                    <p>20.05.2000</p>
                    <button className='history-load-branch-button'>Diesen Stand laden</button>
                </div>
                <p className='history-commit'>feat(content)/setup</p>
            </div>
            <div className='history-content-wrapper'>
                <div className='history-information'>
                    <p>25.05.2000</p>
                    <button className='history-load-branch-button'>Diesen Stand laden</button>
                </div>
                <p className='history-commit'>fix(content)/spelling</p>
            </div>
            <div className='history-content-wrapper'>
                <div className='history-information'>
                    <p>25.05.2000</p>
                    <button className='history-load-branch-button'>Diesen Stand laden</button>
                </div>
                <p className='history-commit'>fix(content)/spelling</p>
            </div>
            <div className='history-content-wrapper'>
                <div className='history-information'>
                    <p>25.05.2000</p>
                    <button className='history-load-branch-button'>Diesen Stand laden</button>
                </div>
                <p className='history-commit'>fix(content)/spelling</p>
            </div>
        </div>
    )
}