import React, {useState} from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

import { imageData } from '../../../assets/imageData';
import './HeroContainer.css'
export default function App() {

  const [activeImage, setActiveImage] = useState(0)


  const renderCarouselItems = () => {
    return (
      imageData.map((image, index) => {

        return (
          <MDBCarouselItem itemId={index} className={activeImage === index ? 'active' : null}>
            <MDBCarouselElement className='img-fluid shadow-4 responsive'  src={image} alt='...' />
          </MDBCarouselItem>
        )
      })
    )
  }


  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        {renderCarouselItems()}
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

