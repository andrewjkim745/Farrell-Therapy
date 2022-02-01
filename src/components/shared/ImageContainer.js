import React from 'react';

export const ImageContainer = ({ image, children }) => {
    return (
        <div data-aos='fade-in' data-aos-once='true'style={{position: 'relative'}}>
            <img style={{width: '100%', minHeight: 300}} className='img-fluid'src={image}/>
            {children}
        </div>
      );
}
