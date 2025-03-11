import React from 'react';
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

function StaffManagement() {
    const subItems =[
        { path: "/users", name: "Users"},
        { path: "/roles", name: "Roles"}
    ]
  return (
    <>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accordion-header'>
          <div className="d-flex align-items-center">
            <FaUsers className="me-2" />
            Staff Management
          </div>
        </Accordion.Header>
        <Accordion.Body>
          {subItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.path} 
              className={({ isActive }) => isActive ? "link active" : "link"}>
              {item.name}
            </NavLink>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  )
}

export default StaffManagement