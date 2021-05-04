import React from 'react';
import {NavDropdown, Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'

const NavBar = ({setIsSignedIn, onRouteChange, isSignedIn}) => {

  const signout = ()=>{
    onRouteChange('signout')
    setIsSignedIn(false)

  }

  if( isSignedIn) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">SmartShift</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>onRouteChange('createLocation')} >Create Location</Nav.Link>
            <Nav.Link onClick={()=>onRouteChange('createShift')} >Create Shift</Nav.Link>
            <NavDropdown title="User Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>onRouteChange('addUser')} >Add User</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>onRouteChange('addUser')}>Edit User</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>onRouteChange('clientList')}>Client List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={()=>signout()}>Signout</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
          );
  } else {
    return null
  }
    
};

export default NavBar;