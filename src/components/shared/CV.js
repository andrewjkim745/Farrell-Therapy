import React from 'react'
import { cvdata } from '../../assets/cvdata'




export const CV = ({ handleClick }) => {

    return (
        <div class='is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-6 m-6'>
        {cvdata.map(object => {
            return (
                <div class='is-flex'>
                    <p>{object.date + ' ' + object.type}</p>
                </div>
                
            )
        })}
        <h1 style={{cursor:'pointer'}} onClick={()=>handleClick('default')}>go back to default</h1>
        </div>
    )
}