import React, {useState}  from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBRow
} from 'mdb-react-ui-kit';

export const Navbar = () => {
    const [showNavColor, setShowNavColor] = useState(false);
  return (
    <>
    <MDBRow>
      <div className='mr-4 bg-light d-flex justify-content-center'><h6 class='is-size-6-mobile'>631-891-9715 | robert@robertfarrelltherapy.com</h6></div>
    </MDBRow>
     <MDBNavbar sticky expand='lg' dark bgColor='info'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <div class='d-flex flex-column'>
          <h1 class='has-text-weight-light is-size-6-mobile is-size-4-desktop'>Robert A. Farrell, Ph.D., ABPP</h1>
          </div>
          </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColor(!showNavColor)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColor} navbar>
          <MDBNavbarNav right fullWidth={false} className='ms-auto'>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink  aria-current='page'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink onClick={() => setShowNavColor(!showNavColor)} href='#about' >About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink >Services</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink onClick={() => setShowNavColor(!showNavColor)} href='#contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}