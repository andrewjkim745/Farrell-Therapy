import React, { useState } from 'react'
import { TextContainer, Title } from '..'
import room from '../../assets/room.jpg'
import CV from '../../assets/CVP.jpg'


export const ServicesDefault = ({ handleClick }) => {

        return <TextContainer >
            <Title
                title='Services and Credentials'
                additonalClass='has-text-centered Dongle mt-6'
            />
            <div class='py-6 columns'>
                <div data-aos='fade-right' data-aos-once='true' class='column'>
                    <Title
                        title='CV'
                        additonalClass='has-text-centered Dongle borderBottom'
                    />
                        <img
                            onClick={()=> handleClick('CV')}
                            src={CV}
                            className='img-fluid rounded hover-shadow img-thumbnail'
                            alt='example'
                        />
                </div>
                <div class='column is-flex is-justify-content-center is-align-items-center'>
                <Title
                title='or'
                />
                </div>
                <div data-aos='fade-left' data-aos-once='true' class='column'>
                    <Title
                        title='Services and Rates'
                        additonalClass='has-text-centered Dongle borderBottom'
                    />
                        <img
                            onClick={()=> handleClick('room')}
                            src={room}
                            className='img-fluid rounded hover-shadow img-thumbnail'
                            alt='example'
                        />
                   
                </div>
            </div>
        </TextContainer>
}