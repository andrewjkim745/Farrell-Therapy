import React from 'react'
import { MDBRipple } from 'mdb-react-ui-kit';



export const TwoColumns = ({ src, text, backgroundColor }) => {

    return (
        <div data-aos='fade-in' class={`has-background-${backgroundColor} columns`}>
            <div class='column'>
                <MDBRipple>
                <img style={{ height: '100%', objectFit: 'contain' }} className='img-fluid img-thumbnail hover-shadow hover-overlay' src={src} />
                </MDBRipple>
            </div>
            <div class='column'>
                <p class='textAlignJustify'>{text}</p>
            </div>
        </div>
    )
}