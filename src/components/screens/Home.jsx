import React from 'react'
import HeroContainer from './HeroContainer.js/HeroContainer'
import { ImageContainer, TextContainer, Title, ColumnsContainer } from '../../components'
import dune from '../../assets/dune.jpg'
import Farrell from '../../assets/farrell.jpg'
import './Home.css'

export default function Home() {



    return (
        <div>
            <ImageContainer
                image={dune}>
                <div>
                    <Title
                        aos='fade-up'
                        additonalClass='titleOverlay Cinzel'
                        title='Individual, Couple, Group, and Teletherapy Sessions'
                    />
                </div>
            </ImageContainer>
            <TextContainer id='about'>
                <Title
                    aos='fade-left'
                    title='Welcome'
                    additonalClass='has-text-centered py-3 Cinzel borderBottom'
                />
               <ColumnsContainer
               src={Farrell}
               />
            </TextContainer>
            <HeroContainer data-aos='fade-in'/>
        </div>
    )
}