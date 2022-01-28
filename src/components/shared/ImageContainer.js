import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

export const ImageContainer = ({ image, children }) => {
    return (
        <div style={{position: 'relative'}}>
            <img style={{width: '100%'}} className='img-fluid'src={image}/>
            {children}
        </div>
      );
}
