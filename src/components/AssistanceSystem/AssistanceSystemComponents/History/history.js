import React from 'react'

import './history.css'

export const History = () => {
    const openConfirmationModal = () => {
        document.getElementById('conformation-modal-wrapper').classList.remove('hidden')
    }

    const closeConfirmationModal = () => {
        document.getElementById('conformation-modal-wrapper').classList.add('hidden')
    }

    return (
        <>
            <div className='history-wrapper'>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>17.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModal}>Diesen Stand laden</button>
                    </div>
                    <p className='history-commit'>feat(userInterface)/implemented-the-interface</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>20.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModal}>Diesen Stand laden</button>
                    </div>
                    <p className='history-commit'>feat(content)/setup</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>25.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModal}>Diesen Stand laden</button>
                    </div>
                    <p className='history-commit'>fix(content)/spelling</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>25.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModal}>Diesen Stand laden</button>
                    </div>
                    <p className='history-commit'>fix(content)/spelling</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>25.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModal}>Diesen Stand laden</button>
                    </div>
                    <p className='history-commit'>fix(content)/spelling</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>25.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModal}>Diesen Stand laden</button>
                    </div>
                    <p className='history-commit'>fix(content)/spelling</p>
                </div>
            </div>
            <div className='conformation-modal-wrapper hidden' id='conformation-modal-wrapper'>
                <p>Wollen sie folgenden Stand, ("Platzhalter") vom (Platzhalter), sicher in die Entwicklungsumgebung laden?</p>
                <div className='conformation-modal-choices'>
                    <button className='conformation-modal-yes'>Ja</button>
                    <button className='conformation-modal-no' onClick={closeConfirmationModal}>Nein</button>
                </div>
            </div>
        </>
    )
}