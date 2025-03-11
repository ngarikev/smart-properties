import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import StickyBox from 'react-sticky-box';
import SidebarMenu from '../../components/SidebarMenu';


function Sidebar({ show, handleClose }) {
  return (
    <>
      {/* Sidebar visible on large screens */}
      <StickyBox offsetTop={0} offsetBottom={0}>
      <div className="d-none d-md-block sidebar">
        <h5>Home</h5>
        <SidebarMenu />
      </div>

      {/* Offcanvas sidebar for small screens */}
      <Offcanvas show={show} onHide={handleClose} backdrop={true} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Xyz Real Estate</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <Nav className="flex-column">
          <SidebarMenu />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      </StickyBox>
      
    </>
  );
}

export default Sidebar;
