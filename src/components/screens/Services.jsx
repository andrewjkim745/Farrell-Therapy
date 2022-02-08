import React, { useState } from 'react'
import { ServicesDefault, ThreeColumns, CV } from '..'

export default function Services() {


    const [screen, setScreen] = useState('default')


    const handleClick = (screenState) => {
        setScreen(screenState)
    }

    const switchScreens = () => {
        switch(screen) {
            case 'default':
                return <ServicesDefault handleClick={handleClick}/>
            case 'CV':
                return <CV handleClick={handleClick}/>
            case 'room':
                return 
        }
    }
    return (
        <ServicesDefault
        />
    )
}