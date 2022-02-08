import React from 'react'
import cvdata from '../../assets/cvdata'




export const CV = () => {

    return (
        <>
        {cvdata.map(object => {
            return (
                <div class='is-flex flex-direction-column'>
                    {object.date}
                    {object.type}
                </div>
                
            )
        })}
        <h1 onClick={()=>handleClick('default')}>go back to default</h1>
        </>
    )
}