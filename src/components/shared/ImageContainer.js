import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

export const ImageContainer = ({ image, children }) => {
    return (
        <>
            <img className='img-fluid'src={image}/>
            {children}
        </>
      );
}
