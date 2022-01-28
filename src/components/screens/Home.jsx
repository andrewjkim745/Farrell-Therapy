import React, { useState } from 'react'
import Navbar from '../Navbar'
import HeroContainer from './HeroContainer.js/HeroContainer'
import { ImageContainer, TextContainer, Title } from '../../components'
import dune from '../../assets/dune.jpg'
import './Home.css'

export default function Home () {



    return (
        <div>
            <Navbar/>
            <ImageContainer
            image={dune}>
                <div>
                <Title
                className={'titleOverlay'}
                title={'Individual, Couple, Group, and Teletherapy Sessions'}
                />
                </div>
            </ImageContainer>
            <TextContainer/>
            <HeroContainer/>
        </div>
    )
}