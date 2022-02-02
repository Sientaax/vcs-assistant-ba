import React from 'react'

import { PlusCircleOutlined } from '@ant-design/icons';

import './history.css'

export const History = ({ isOpen }) => {
    const openConfirmationModalLoadCommit = ({ addDescription }) => {
        document.getElementById('conformation-modal-wrapper').classList.remove('hidden')
    }

    const closeConfirmationModalLoadCommit = () => {
        document.getElementById('conformation-modal-wrapper').classList.add('hidden')
    }

    const openInspectingCommitModal = () => {
        document.getElementById('conformation-modal-wrapper').classList.add('hidden')
        document.getElementById('inspecting-modal-wrapper').classList.remove('hidden')
        // Version in die Entwicklungsumgebung laden die ausgewählt wurde
    }

    const closeInspectingCommitModal = () => {
        document.getElementById('inspecting-modal-wrapper').classList.add('hidden')
        // aktuelle Version wieder in die Entwicklungsumgebung laden
    }

    const openConfirmationModalApplyCommit = () => {
        document.getElementById('confirmation-modal-appy-commit-wrapper').classList.remove('hidden')

    }

    const closeConfirmationModalApplyCommit = () => {
        document.getElementById('confirmation-modal-appy-commit-wrapper').classList.add('hidden')
        document.getElementById('inspecting-modal-wrapper').classList.add('hidden')
        // aktuelle Version wieder in die Entwicklungsumgebung laden
    }

    const appyLoadedCommit = () => {
        document.getElementById('confirmation-modal-appy-commit-wrapper').classList.add('hidden')
        document.getElementById('inspecting-modal-wrapper').classList.add('hidden')
        // Von der geladenen Version weiter arbeiten lassen
    }

    return (
        <>
            <div className='history-wrapper'>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>17.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModalLoadCommit}>Diese Version laden</button>
                    </div>
                    <p className='history-commit'>feat(userInterface)/implemented-the-interface</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>20.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModalLoadCommit}>Diese Version laden</button>
                    </div>
                    <p className='history-commit'>feat(content)/setup</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>25.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModalLoadCommit}>Diese Version laden</button>
                    </div>
                    <p className='history-commit'>fix(content)/spelling</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>25.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModalLoadCommit}>Diese Version laden</button>
                    </div>
                    <p className='history-commit'>fix(content)/spelling</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>25.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModalLoadCommit}>Diese Version laden</button>
                    </div>
                    <p className='history-commit'>fix(content)/spelling</p>
                </div>
                <div className='history-content-wrapper'>
                    <div className='history-information'>
                        <p>25.05.2000</p>
                        <button className='history-load-branch-button' onClick={openConfirmationModalLoadCommit}>Diese Version laden</button>
                    </div>
                    <p className='history-commit'>fix(content)/spelling</p>
                </div>
            </div>
            <div className='confirmation-modal-wrapper hidden' id='conformation-modal-wrapper'>
                <p>Wollen sie folgende Version, ("Platzhalter") vom (Platzhalter), sicher in die Entwicklungsumgebung laden?</p>
                <div className='confirmation-modal-choices'>
                    <button className='confirmation-modal-yes' onClick={openInspectingCommitModal}>Ja</button>
                    <button className='confirmation-modal-no' onClick={closeConfirmationModalLoadCommit}>Nein</button>
                </div>
            </div>
            <div className='inspecting-modal-wrapper hidden' id='inspecting-modal-wrapper'>
                <div className='inspecting-modal-text'>
                    <p className='inspecting-modal-text-one'>Aktuell ist die Version (Platzhalter) vom (Platzhalter) in der Entwicklungsumgebung geladen.</p>
                    <p className='inspecting-modal-text-two'>Möchtest du wieder zu aktuellen Version wechseln oder von diesem Stand aus weiter arbeiten?</p>
                </div>
                <div className='inspecting-modal-choices'>
                    <button className='inspecting-modal-yes' onClick={closeInspectingCommitModal}>Zurück zur aktuellen Version</button>
                    <button className='inspecting-modal-no' onClick={openConfirmationModalApplyCommit}>Bei dieser Version bleiben</button>
                </div>
            </div>
            <div className='confirmation-modal-wrapper-appy-commit hidden' id='confirmation-modal-appy-commit-wrapper'>
                <p>Bist du dir sicher, dass du von dieser Version, die aktuell in der Entwicklungsumgebung geladen ist, weiter arbeiten möchtest? Falls du noch nicht den letzten Stand der Historie hinzugefügt hast, kannst du zu diesem auch nicht mehr zurückkehren.</p>
                <div className='confirmation-modal-choices'>
                    <button className='confirmation-modal-yes' onClick={appyLoadedCommit}>Ja</button>
                    <button className='confirmation-modal-no' onClick={closeConfirmationModalApplyCommit}>Nein</button>
                </div>
            </div>
            <PlusCircleOutlined onClick={() => isOpen()} />
        </>
    )
}