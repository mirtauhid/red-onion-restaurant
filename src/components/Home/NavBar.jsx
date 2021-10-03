/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo2.png';
import RedButton from '../Buttons/RedButton';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
      <Container>
        <Navbar.Brand style={{ maxWidth: '120px' }} href='#home'>
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            src={logo}
            alt='restaurant logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' />
          <Nav
            style={{
              fontSize: '18px',
              fontWeight: '500',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              minWidth: '220px',
            }}>
            <Nav.Link href='#deets'>
              <i className='fas fa-shopping-cart' />
            </Nav.Link>
            <Nav.Link href='#deets'>Login</Nav.Link>
            <Nav.Link href='#deets'>
              <RedButton title='Sign up' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
