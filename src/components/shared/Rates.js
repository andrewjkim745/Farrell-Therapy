import React from 'react'
import { ThreeColumns } from '..'
import { edata } from '../../assets/cvdata'




export const Rates = ({ handleClick }) => {
    return (
        <>
            <ThreeColumns>
                {edata.map(object => {
                    return (
                        <div class='p-6'>
                            <h1>{object.date}</h1>
                            <p>{object.place}</p>
                        </div>
                    )

                })}
            </ThreeColumns>
            <h1 style={{ cursor: 'pointer' }} class='has-text-centered' onClick={() => handleClick('default')}>go back to default</h1>
        </>
    )
}