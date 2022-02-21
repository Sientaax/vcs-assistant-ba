import React from 'react'

import './branchExists.css'

export const BranchExists = ({ closebranchExists }) =>{
    return(
        <div className='branchExists-wrapper'>
            <p className='branchExists-placeholder'>Der Name existiert bereits!</p>
            <p className='branchExists-explanation'>Bitte speicher deinen aktuellen Stand erneut.</p>
            <button className='branchExists-confirmation-modal-yes' onClick={() => closebranchExists()}>Okay</button>
        </div>
    )
}