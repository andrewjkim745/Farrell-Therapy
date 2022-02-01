import React from 'react'
import { MDBRipple } from 'mdb-react-ui-kit';



export const TwoColumns = ({ src, text, backgroundColor }) => {

    return (
        <div class={`has-background-${backgroundColor} columns`}>
            <div class='column'>
                <p>{text}</p>
            </div>
            <div class='column'>
                <MDBRipple>
                <img style={{ height: '100%', objectFit: 'contain' }} className='img-fluid img-thumbnail hover-shadow hover-overlay' src={src} />
                </MDBRipple>
            </div>
            
        </div>
    )
}