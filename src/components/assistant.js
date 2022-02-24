import React, { useState } from 'react';

import './assistant.css';

import { Header } from './Header/header'
import { SystemStatus } from './SystemStatus/systemStatus'
import { Description } from './Description/description'
import { Popup } from './Popup/popup'
import { ws } from '../App';
import { BranchExists } from './BranchExists/branchExists';

export let parsedData = '';

export const Assistant = () => {
    const [popupCause, setPopupCause] = useState("");
    const [assistantActive, setAssistantActive] = useState(false)
    const [getWorkingTimeCounter, setGetWorkingTimeCounter] = useState(0)
    const [workingTimeCounter, setWorkingTimeCounter] = useState(0)
    const [showCommitPannel, setShowCommitPannel] = useState(0)
    const [getLogCounter, setGetLogCounter] = useState("0")
    const [popupExplanation, setPopupExplanation] = useState("")

    const isClicked = () => {
        document.getElementById('description-hidden').classList.remove('description-hidden')
        document.getElementById('header-hidden').classList.add('header-hidden')
    }

    const shutDownDescription = () => {
        document.getElementById('description-hidden').classList.add('description-hidden')
        document.getElementById('header-hidden').classList.remove('header-hidden')
    }

    const shutDownPopup = () => {
        document.getElementById('popup-hidden').classList.add('popup-hidden')
    }

    const shutDownPopupDescription = () => {
        document.getElementById('popup-hidden-wrapper').classList.add('popup-hidden-wrapper')
        document.getElementById('header-hidden').classList.remove('header-hidden')
    }

    const shutDownBranchExists = () => {
        document.getElementById("branch-exists-hidden").classList.add("branch-exists-hidden")
        ws.send(JSON.stringify({
            id: "branchExistsClicked",
            data: "branchExistsClicked",
        }))
    }

    ws.onopen = () => {
        setAssistantActive(true)
    }

    ws.onclose = () => {
        setAssistantActive(false)
    }

    // Rechnung: 1 Minute = 11; 2 Minuten = 23; 3 Minuten = 35; ...

    ws.onmessage = (evt) => {
        let parsedJson = JSON.parse(evt.data)
        if (parsedJson.countWorkingTime) {
            setWorkingTimeCounter(workingTimeCounter + 1)
            if (workingTimeCounter === 11) {
                setWorkingTimeCounter(0)
                setGetWorkingTimeCounter(getWorkingTimeCounter + 1)
            }
            setShowCommitPannel(showCommitPannel + 1)
            // 20 Minutes
            if (showCommitPannel === 239) {
                setShowCommitPannel(0)
                setPopupCause('20 Minuten sind vorbei')
                setPopupExplanation('Bitte beschreibe kurz, was du alles in der letzten Zeit gemacht hast')
                document.getElementById('header-hidden').classList.add('header-hidden')
                document.getElementById('popup-hidden-wrapper').classList.remove('popup-hidden-wrapper')
                document.getElementById('popup-hidden').classList.remove('popup-hidden')
            }
        } else if (parsedJson.createNewFile) {
            setPopupCause('Eine neue Datei wurde hinzugefügt')
            setPopupExplanation('Bitte beschreibe kurz, was du alles in der letzten Zeit gemacht hast')
            document.getElementById('header-hidden').classList.add('header-hidden')
            document.getElementById('popup-hidden-wrapper').classList.remove('popup-hidden-wrapper')
            document.getElementById('popup-hidden').classList.remove('popup-hidden')
        } else if (parsedJson.deleteAFile) {
            setPopupCause('Eine Datei wurde gelöscht')
            setPopupExplanation('Bitte beschreibe kurz, was du alles in der letzten Zeit gemacht hast')
            document.getElementById('header-hidden').classList.add('header-hidden')
            document.getElementById('popup-hidden-wrapper').classList.remove('popup-hidden-wrapper')
            document.getElementById('popup-hidden').classList.remove('popup-hidden')
        } else if (parsedJson.log) {
            parsedData = JSON.parse(evt.data);
        } else if (parsedJson.logCounter) {
            setGetLogCounter(parsedJson.logCounter)
        } else if (parsedJson.branchExists) {
            document.getElementById("branch-exists-hidden").classList.remove("branch-exists-hidden")
        }
    }

    return (
        <div className='assistant-wrapper' id='assistant-wrapper'>
            <div className='taskbar'></div>
            <div className='' id='header-hidden'>
                <Header openDescription={isClicked} workingTimeCounter={getWorkingTimeCounter} setLogCounter={getLogCounter} />
            </div>
            <div className='branch-exists-hidden' id='branch-exists-hidden'>
                <BranchExists closebranchExists={shutDownBranchExists} />
            </div>
            <SystemStatus isAssistantActive={assistantActive} />
            <div className='description-hidden' id='description-hidden'>
                <Description closeDescription={shutDownDescription} />
            </div>
            <div className='popup-hidden-wrapper' id='popup-hidden-wrapper'>
                <div className='popup-hidden' id='popup-hidden'>
                    <Popup closePupup={shutDownPopup} popupReason={popupCause} popupDescription={popupExplanation} />
                </div>
                <Description closeDescription={shutDownPopupDescription} />
            </div>
        </div>
    )
}