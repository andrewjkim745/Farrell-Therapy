import React, { useState } from 'react'
import Navbar from '../Navbar'
import HeroContainer from './HeroContainer.js/HeroContainer'
import { ImageContainer, TextContainer } from '../../components'
import dune from '../../assets/dune.jpg'

export default function Home () {



    return (
        <div>
            <Navbar/>
            <ImageContainer
            image={dune}
            />
            <TextContainer/>
            <HeroContainer/>
        </div>
    )
}