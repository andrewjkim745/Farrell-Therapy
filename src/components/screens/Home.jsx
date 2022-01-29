import React from 'react'
import Navbar from '../Navbar'
import HeroContainer from './HeroContainer.js/HeroContainer'
import { ImageContainer, TextContainer, Title, ColumnsContainer, Footer } from '../../components'
import dune from '../../assets/dune.jpg'
import Farrell from '../../assets/farrell.jpg'
import './Home.css'

export default function Home() {



    return (
        <div>
            <Navbar />
            <ImageContainer
                image={dune}>
                <div>
                    <Title
                        aos='fade-up'
                        additonalClass='titleOverlay'
                        title='Individual, Couple, Group, and Teletherapy Sessions'
                    />
                </div>
            </ImageContainer>
            <TextContainer id='about'>
                <Title
                    
                    aos='fade-left'
                    title='Welcome to my website'
                    additonalClass='has-text-centered py-3 Amatic borderBottom'
                />
               <ColumnsContainer
               src={Farrell}
               />
            </TextContainer>
            
            <HeroContainer data-aos='fade-in'/>
            <Footer/>
        </div>
    )
}