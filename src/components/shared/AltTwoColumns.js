import React from 'react'




export const AltTwoColumns = ({ src, text, backgroundColor }) => {

    return (
        <div data-aos='fade-in' class={`has-background-${backgroundColor} columns`}>
            <div class='column'>
                <p>{text}</p>
            </div>
            <div class='column'>
                <img style={{ height: '100%', objectFit: 'cover' }} className='img-fluid img-thumbnail hover-shadow hover-overlay' src={src} />
            </div>
            
        </div>
    )
}