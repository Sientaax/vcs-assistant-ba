import React, { useState } from 'react'

import { CloseOutlined } from '@ant-design/icons';
import { ws } from '../../App';

import './description.css';

export const Description = ({ closeDescription }) => {
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [radio, setRadio] = useState('Neue Funktionalität')
    const [error, setError] = useState(false)

    let commitMessage = ''

    const onChangeValue = (event) => {
        setRadio(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        buildCommitMessage()
        setCategory('')
        setDescription('')
    }

    const buildCommitMessage = () => {
        if (category === '' && description === '') {
            setError(true)
        } else if (category !== '' && description === '') {
            setError(true)
        } else if (category === '' && description !== '') {
            setError(true)
        } else {
            commitMessage = radio.replace(/ +/g, '-') + '(' + category.replace(/ +/g, '-').replace(/,/, '999').replace(/\(/, '888').replace(/\)/, '777') + '/' + description.replace(/ +/g, '-').replace(/(\r\n|\n|\r)/gm, '-').replace(/(\.|!|\?)/gm, '_').replace(/,/gm, '999').replace(/\(/, '888').replace(/\)/, '777')
            ws.send(JSON.stringify({
                id: "commitMessage",
                data: commitMessage,
            }))
            closeDescription();
            setError(false);
        }
    }

    return (
        <>
            <CloseOutlined onClick={() => closeDescription()} />
            <div className='description-wrapper'>
                <form onSubmit={handleSubmit}>
                    <div className='description-feat-or-fix'>
                        <p>Ordne bitte deine letzten Veränderungen am Code einer dieser Kategorien zu.</p>
                        <div className='description-radio' onChange={onChangeValue} >
                            <div className='description-radio-feat'>
                                <input type='radio' id='feat' name='featOrFix' required value='Neue Funktionalität' defaultChecked />
                                <label htmlFor='feat'>Neue Funktionalität ergänzt</label>
                            </div>
                            <div className='description-radio-fix'>
                                <input type='radio' id='fix' name='featOrFix' required value='Fehler behoben' />
                                <label htmlFor='fix'>Fehler im Code behoben</label>
                            </div>
                            <div className='description-radio-comment'>
                                <input type='radio' id='comment' name='featOrFix' required value='Code kommentiert' />
                                <label htmlFor='comment'>Code kommentiert</label>
                            </div>
                            <div className='description-radio-style'>
                                <input type='radio' id='style' name='featOrFix' required value='Code formatiert' />
                                <label htmlFor='style'>Code besser formatiert</label>
                            </div>
                        </div>
                    </div>
                    <div className='description-category'>
                        <p>Definiere bitte einen Überbegriff für das was du gemacht hast.</p>
                        <input type="text" id="category" name="name" maxLength={30} size="37" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="z.B.: Methode kommentiert" />
                    </div>
                    <div className='description-text'>
                        <p>Beschreibe etwas ausführlicher, was du genau gemacht hast.</p>
                        <textarea id="description" name="explanation" maxLength={200} value={description} onChange={(e) => setDescription(e.target.value)} placeholder='z.B.: Habe die draw() Methode kommentiert, damit der Code verständlicher wird.' />
                    </div>
                    {error && <p className='description-error'>Senden fehlerhaft: Nicht alle Felder wurden ausgefüllt!</p>}
                    <input className='description-send' type="submit" />
                </form>
            </div>
        </>
    )
}