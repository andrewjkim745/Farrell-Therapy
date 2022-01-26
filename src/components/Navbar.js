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

export default function Navbar() {
    const [showNavColor, setShowNavColor] = useState(false);
  return (
    <>
    <MDBRow>
      <div className='mr-4bg-light d-flex justify-content-center'>631-891-9715 | robert@robertfarrelltherapy.com</div>
    </MDBRow>
     <MDBNavbar sticky expand='lg' dark bgColor='info'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <div class='d-flex flex-column'>
          Robert A. Farrell, Ph.D., ABPP
          <span>Individual, Couple, Group, and Teletherapy Sessions</span>
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
              <MDBNavbarLink aria-current='page'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink  >About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink >Services</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}