import React, { useState } from 'react';

import './assistant.css';

import { Header } from './Header/header'
import { SystemStatus } from './SystemStatus/systemStatus'
import { Description } from './Description/description'
import { Popup } from './Popup/popup'
import { ws } from '../App';

export let parsedData = '';

export const Assistant = () => {
    const [popupCause, setPopupCause] = useState("");
    const [assistantActive, setAssistantActive] = useState(false)
    const [getWorkingTimeCounter, setGetWorkingTimeCounter] = useState(0)
    const [workingTimeCounter, setWorkingTimeCounter] = useState(0)
    const [showCommitPannel, setShowCommitPannel] = useState(0)
    const [getLogCounter, setGetLogCounter] = useState("0")

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

    ws.onopen = () => {
        setAssistantActive(true)
    }

    ws.onclose = () => {
        setAssistantActive(false)
    }

    // Rechnung: 1 Minute = 11; 2 Minuten = 23; 3 Minuten = 34; ...
    // TODO createNewFile und deleteAFile in plugin implementieren
    // TODO Branch laden implementieren
    // Assistenten starten

    ws.onmessage = (evt) => {
        let parsedJson = JSON.parse(evt.data)
        if (parsedJson.countWorkingTime) {
            setWorkingTimeCounter(workingTimeCounter + 1)
            if(workingTimeCounter === 11){
                setWorkingTimeCounter(0)
                setGetWorkingTimeCounter(getWorkingTimeCounter + 1)
            }
            setShowCommitPannel(showCommitPannel + 1)
            if (showCommitPannel === 35) {
                setShowCommitPannel(0)
                setPopupCause('3 Minuten sind vorbei')
                document.getElementById('header-hidden').classList.add('header-hidden')
                document.getElementById('popup-hidden-wrapper').classList.remove('popup-hidden-wrapper')
                document.getElementById('popup-hidden').classList.remove('popup-hidden')
            }
        } else if(parsedJson.createNewFile){
                setPopupCause('Ein neue Datei wurde hinzugefügt')
                document.getElementById('header-hidden').classList.add('header-hidden')
                document.getElementById('popup-hidden-wrapper').classList.remove('popup-hidden-wrapper')
                document.getElementById('popup-hidden').classList.remove('popup-hidden')
        } else if(parsedJson.deleteAFile){
            setPopupCause('Ein Datei wurde gelöscht')
            document.getElementById('header-hidden').classList.add('header-hidden')
            document.getElementById('popup-hidden-wrapper').classList.remove('popup-hidden-wrapper')
            document.getElementById('popup-hidden').classList.remove('popup-hidden')
        } else if(parsedJson.log){
            parsedData = JSON.parse(evt.data);
            console.log("Parsed Data: ", parsedData)
        } else if(parsedJson.logCounter){
            setGetLogCounter(parsedJson.logCounter)
        }
    }

    return (
        <div className='assistant-wrapper' id='assistant-wrapper'>
            <div className='' id='header-hidden'>
                <Header openDescription={isClicked} workingTimeCounter={getWorkingTimeCounter} setLogCounter={getLogCounter} />
            </div>
            <SystemStatus isAssistantActive={assistantActive}/>
            <div className='description-hidden' id='description-hidden'>
                <Description closeDescription={shutDownDescription} />
            </div>
            <div className='popup-hidden-wrapper' id='popup-hidden-wrapper'>
                <div className='popup-hidden' id='popup-hidden'>
                    <Popup closePupup={shutDownPopup} popupReason={popupCause} />
                </div>
                <Description closeDescription={shutDownPopupDescription} />
            </div>
        </div>
    )
}