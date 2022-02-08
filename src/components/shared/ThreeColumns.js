import React from 'react'



export const ThreeColumns = ({ children }) => {

    return (
        <div data-aos='fade-in' class='columns'>
            <div class='column'>
                {children}
            </div>
            <div class='column'>
                {children}
            </div>
            <div class='column'>
                {children}
            </div>
            
        </div>
    )
}