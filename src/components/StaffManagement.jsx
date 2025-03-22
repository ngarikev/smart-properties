import React from 'react';
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import '../assets/Css/Accordion.css'

function StaffManagement() {
    const subItems =[
        { path: "/users", name: "Users"},
        { path: "/roles", name: "Roles"}
    ]
  return (
    <>
    <Accordion flush >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="custom-accordion-header">
          <div className="d-flex align-items-center w-100" style={{color: "#555"}}>
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
    <hr />
    <h5 className='px-2 py-3 sidebar-title'>Business Management</h5>
    </>
  )
}

export default StaffManagement