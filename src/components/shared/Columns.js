import React from 'react'




export const TwoColumns = ({ src, text }) => {

    return (
        <div class={`has-background-${backgroundColor} columns`}>
                    <div class='column'>
                        <img style={{ height: '50%', objectFit: 'cover'}} className='img-fluid img-thumbnail hover-shadow hover-overlay' src={src}/>
                    </div>

                    <div class='column'>
                        <p>{text}</p>
                    </div>
                </div>
    )
}