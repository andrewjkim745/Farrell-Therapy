import React, { useState } from 'react'
import { TextContainer, Title, ServicesDefault } from '..'
import room from '../../assets/room.jpg'
import CV from '../../assets/CVP.jpg'

export default function Services() {


    const [services, setServices] = useState(false)
    const [cv, setCV] = useState(false)


    return (
        <ServicesDefault/>
    )
}