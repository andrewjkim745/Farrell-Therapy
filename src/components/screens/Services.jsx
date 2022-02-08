import React, { useState } from 'react'
import { ServicesDefault, ThreeColumns } from '..'

export default function Services() {


    const [services, setServices] = useState(false)
    const [cv, setCV] = useState(false)


    const screenSwitch = () => {
        
    }


    return (
        <ServicesDefault
        cvClick={()=>setCV(true)}
        servicesClick={()=>setServices(true)}
        />
    )
}