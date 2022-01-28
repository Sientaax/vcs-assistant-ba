import React from 'react'

import './description.css';

export const Description = () => {
    return (
        <div className='description-wrapper'>
            <div className='description-feat-or-fix'>
                <p>Hast du an etwas neuem gearbeitet oder etwas ausgebessert?</p>
                <div className='description-radio'>
                    <div className='description-radio-feat'>
                        <input type='radio' id='feat' name='featOrFix' value='feat' />
                        <label htmlFor='feat'>An etwas neuem</label>
                    </div>
                    <div className='description-radio-fix'>
                        <input type='radio' id='fix' name='featOrFix' value='fix' />
                        <label htmlFor='fix'>Etwas ausgebessert</label>
                    </div>
                </div>
            </div>
            <div className='description-category'>
                <p>Definiere bitte einen Überbegriff für das was du gemacht hast.</p>
                <input type="text" id="category" name="name" required size="30" placeholder="z.B.: User Interface, Content, ..." />
            </div>
            <div className='description-text'>
                <p>Beschreibe in 2, 3 oder 4 Worten was du genau gemacht hast.</p>
                <input type="text" id="description" name="explanation" required size="30" placeholder='z.B.: spelling mistakes, ...' />
            </div>
            <div className='description-result'>
                <p>Ergebnis:</p>
                <p className='description-result-word' id='description-result-word'></p>
            </div>
            <button className='description-send'>Speichern</button>
        </div>
    )
}