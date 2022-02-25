import React, { useState } from 'react'

import { CloseOutlined } from '@ant-design/icons';
import { ws } from '../../App';

import './description.css';

export const Description = ({ closeDescription }) => {
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [radio, setRadio] = useState('feat')
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
            commitMessage = radio + '(' + category.replace(/ +/g, '-') + '/' + description.replace(/ +/g, '-')
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
                        <p>Hast du an etwas neuem gearbeitet oder etwas ausgebessert?</p>
                        <div className='description-radio' onChange={onChangeValue} >
                            <div className='description-radio-feat'>
                                <input type='radio' id='feat' name='featOrFix' required value='feat' defaultChecked />
                                <label htmlFor='feat'>An etwas neuem</label>
                            </div>
                            <div className='description-radio-fix'>
                                <input type='radio' id='fix' name='featOrFix' required value='fix' />
                                <label htmlFor='fix'>Etwas ausgebessert</label>
                            </div>
                        </div>
                    </div>
                    <div className='description-category'>
                        <p>Definiere bitte einen Überbegriff für das was du gemacht hast.</p>
                        <input type="text" id="category" name="name" size="30" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="z.B.: Interface, Content, ..." />
                    </div>
                    <div className='description-text'>
                        <p>Beschreibe in 3, 4 oder 5 Worten, was du genau gemacht hast.</p>
                        <input type="text" id="description" name="explanation" size="30" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='z.B.: spelling mistakes, ...' />
                    </div>
                    {error && <p className='description-error'>Senden fehlerhaft: Nicht alle Felder wurden ausgefüllt!</p>}
                    <input className='description-send' type="submit" />
                </form>
            </div>
        </>
    )
}