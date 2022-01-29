import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';





export const TextContainer = ({children, id}) => {

    return (
        <>
        <MDBContainer id={id}>
            {children}
        </MDBContainer>
      </>
    )
}