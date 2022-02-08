import React from 'react'
import { ThreeColumns } from '..'
import { education } from '../../assets/cvdata'




export const Rates = ({ handleClick}) => {
    return (
        <>
        <ThreeColumns>
            {education.map(object => {
                <>
                    <h1>{object.date}</h1>
                    <p>{object.place}</p>
                </>
            })}
        </ThreeColumns>
        <h1 onClick={()=>handleClick('default')}></h1>
        </>
    )
}