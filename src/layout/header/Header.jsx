import React from 'react';
import { Navbar, Container, Button, Dropdown } from 'react-bootstrap';

function Header({ toggleSidebar }) {

  const handleToggleSidebar = () =>{

  }
  return (
    <Navbar expand="md" sticky="top" className="shadow navbar">
      <Container fluid>
        {/* Sidebar Toggle Button (Always visible on small screens) */}
        <Button variant="light" className="d-md-none me-2" onClick={toggleSidebar}>
          &#9776;
        </Button>
        
        {/* Brand Name */}
        <Navbar.Brand href="#">Smart Property</Navbar.Brand>
        {/* Sidebar Toggle Button (Always visible on large screens) */}
        {/* <Button variant="light" className="toggler" onClick={toggleSidebar}>
          &#9776;
        </Button> */}
        
        {/* Profile Dropdown */}
        <Dropdown align="end" className="ms-auto">
          <Dropdown.Toggle variant="light" id="profile-dropdown">
            Profile
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Settings</Dropdown.Item>
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;
