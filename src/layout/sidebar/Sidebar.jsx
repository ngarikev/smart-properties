import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import StickyBox from 'react-sticky-box';


function Sidebar({ show, handleClose }) {
  return (
    <>
      {/* Sidebar visible on large screens */}
      <StickyBox offsetTop={0} offsetBottom={0}>
      <div className="d-none d-md-block sidebar">
        <h5>Home</h5>
        <Nav className="flex-column">
          <Nav.Link href="#">Dashboard</Nav.Link>
          <Nav.Link href="#">Orders</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Customers</Nav.Link>
          <hr />
          <Nav.Link href="#">Settings</Nav.Link>
          <Nav.Link href="#">Sign out</Nav.Link>
          <hr />

          <Nav.Link href="#">Dashboard</Nav.Link>
          <Nav.Link href="#">Orders</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Customers</Nav.Link>
          <hr />
          <Nav.Link href="#">Settings</Nav.Link>
          <Nav.Link href="#">Sign out</Nav.Link>
        </Nav>
      </div>

      {/* Offcanvas sidebar for small screens */}
      <Offcanvas show={show} onHide={handleClose} backdrop={true} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Company Name</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <Nav className="flex-column">
            <Nav.Link href="#">Dashboard</Nav.Link>
            <Nav.Link href="#">Orders</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">Customers</Nav.Link>
            <hr />
            <Nav.Link href="#">Settings</Nav.Link>
            <Nav.Link href="#">Sign out</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      </StickyBox>
      
    </>
  );
}

export default Sidebar;
