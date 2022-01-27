import React from 'react'

import './description.css';

export const Description = () => {
    return (
        <>
            <p>Hast du an etwas neuem gearbeitet oder etwas ausgebessert?</p>
            <input type='radio' id='feat' name='featOrFix' value='feat' />
            <label for='feat'>An etwas neuem</label>
            <input type='radio' id='fix' name='featOrFix' value='fix' />
            <label for='fix'>Etwas ausgebessert</label>
            <p>Definiere bitte einen Überbegriff für das was du gemacht hast</p>
            <input type="text" id="category" name="name" required size="30" placeholder="z.B.: User Interface, Content, ..." />
            <p>Beschreibe in 2, 3 oder 4 Worten was genau du gemacht hast.</p>
            <input type="text" id="description" name="explanation" required size="30" />
            <p></p>
            <button>Absenden</button>
        </>
    )
}