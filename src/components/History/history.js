import React, { useState } from 'react'

import { PlusCircleOutlined } from '@ant-design/icons';
import { Empty } from 'antd';
import { parsedData } from '../assistant';
import { ws } from '../../App';

import './history.css'

export const History = ({ isOpen }) => {
    let children;

    const [specificMessage, setSpecificMessage] = useState('')
    const [correctMessage, setCorrectMessage] = useState('')
    const [lastItem, setLastItem] = useState('')

    const openConfirmationModalLoadCommit = (exactMessage) => {
        document.getElementById('conformation-modal-wrapper').classList.remove('hidden')
        setSpecificMessage(exactMessage)
        setCorrectMessage(exactMessage.replace(/\(/, ': ').replaceAll('-', ' '))
        setLastItem(parsedData.log[0].message)
    }

    const closeConfirmationModalLoadCommit = () => {
        document.getElementById('conformation-modal-wrapper').classList.add('hidden')
    }

    const openInspectingCommitModal = () => {
        document.getElementById('conformation-modal-wrapper').classList.add('hidden')
        document.getElementById('inspecting-modal-wrapper').classList.remove('hidden')
        ws.send(JSON.stringify({
            id: "loadBranch",
            data: specificMessage,
        }))
    }

    const closeInspectingCommitModal = () => {
        document.getElementById('inspecting-modal-wrapper').classList.add('hidden')
        ws.send(JSON.stringify({
            id: "loadBranchMaster",
            data: lastItem,
        }))
    }

    const openConfirmationModalApplyCommit = () => {
        document.getElementById('confirmation-modal-appy-commit-wrapper').classList.remove('hidden')
    }

    const closeConfirmationModalApplyCommit = () => {
        document.getElementById('confirmation-modal-appy-commit-wrapper').classList.add('hidden')
        document.getElementById('inspecting-modal-wrapper').classList.add('hidden')
        ws.send(JSON.stringify({
            id: "loadBranchMaster",
            data: lastItem,
        }))
    }

    const appyLoadedCommit = () => {
        document.getElementById('confirmation-modal-appy-commit-wrapper').classList.add('hidden')
        document.getElementById('inspecting-modal-wrapper').classList.add('hidden')
        ws.send(JSON.stringify({
            id: "continueWorking",
            data: specificMessage,
        }))
    }

    if (parsedData === "" || parsedData.log.length === 0) {
        children = <Empty description={"Bisher wurden keine Versionen gespeichert"} />
    } else {
        children = parsedData.log.map((item, i) => (
            <div className='history-content-wrapper' key={i}>
                <div className='history-information'>
                    <p>{item.date.replace(/\b(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\b/, '').replace(/CET/, '').replace(/\b\d{4}\b/, '')}</p>
                    <button className='history-load-branch-button' onClick={() => openConfirmationModalLoadCommit(item.message)}>Diese Version laden</button>
                </div>
                <p className='history-commit'>{item.message.replace(/\(/, ': ').replaceAll('-', ' ')}</p>
            </div>
        ))
    }

    return (
        <>
            <div className='history-wrapper' id='history-wrapper'>
                {children}
            </div>
            <div className='confirmation-modal-wrapper hidden' id='conformation-modal-wrapper'>
                <p>Willst du die Version "{correctMessage}" sicher in IntelliJ laden? Falls du seit dem letztem speichern Änderungen vorgenommen hast und diese noch nicht gespeichert wurden, wären diese Änderungen weg.</p>
                <div className='confirmation-modal-choices'>
                    <button className='confirmation-modal-yes' onClick={openInspectingCommitModal}>Ja</button>
                    <button className='confirmation-modal-no' onClick={closeConfirmationModalLoadCommit}>Nein</button>
                </div>
            </div>
            <div className='inspecting-modal-wrapper hidden' id='inspecting-modal-wrapper'>
                <div className='inspecting-modal-text'>
                    <p className='inspecting-modal-text-one'>Aktuell ist die Version "{correctMessage}" in IntelliJ geladen.</p>
                    <p className='inspecting-modal-text-three'>Bitte verändere keinen Code, solange dieses Overlay zu sehen ist!</p>
                    <p className='inspecting-modal-text-four'>Klicke bitte einmal auf deinen Code, so dass sich dieser aktualisiert.</p>
                    <p className='inspecting-modal-text-two'>Möchtest du wieder zu der letzt gespeicherten Version wechseln oder beginnend von dieser Version ({specificMessage}) erneut arbeiten?</p>
                </div>
                <div className='inspecting-modal-choices'>
                    <button className='inspecting-modal-yes' onClick={closeInspectingCommitModal}>Zurück zur letzt gespeicherten Version</button>
                    <button className='inspecting-modal-no' onClick={openConfirmationModalApplyCommit}>Bei dieser Version bleiben</button>
                </div>
            </div>
            <div className='confirmation-modal-wrapper-appy-commit hidden' id='confirmation-modal-appy-commit-wrapper'>
                <p>Bist du dir sicher, dass du von der Version, die aktuell in der Entwicklungsumgebung geladen ist, weiter arbeiten möchtest? Es ist dann nicht mehr möglich zu einer, von diesem Standpunkt aus gesehen später gespeicherten Versionen, zurückzukehren.</p>
                <div className='confirmation-modal-choices'>
                    <button className='confirmation-modal-yes' onClick={appyLoadedCommit}>Ja</button>
                    <button className='confirmation-modal-no' onClick={closeConfirmationModalApplyCommit}>Nein</button>
                </div>
            </div>
            <PlusCircleOutlined onClick={() => isOpen()} />
        </>
    )
}