import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';





export const TextContainer = ({src}) => {

    return (
        <>
        <MDBContainer>
            <img src={src}/>
        </MDBContainer>
      </>
    )
}