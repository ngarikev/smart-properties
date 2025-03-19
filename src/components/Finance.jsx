import React from 'react';
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFile } from 'react-icons/fa';
import '../assets/Css/Accordion.css'

function Finance() {
  const subItems =[
    { path:"/invoice-1", name: "Invoice1" },
    { path:"/invoice-2", name: "Invoice2" },
    { path:"/invoice-3", name: "Invoice3" },
  ]
  return (
    <>
            <Accordion flush >
              <Accordion.Item eventKey="0">
                <Accordion.Header className="custom-accordion-header">
                  <div className="d-flex align-items-center w-100">
                    <FaFile className="me-2" />
                    Finance
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

export default Finance