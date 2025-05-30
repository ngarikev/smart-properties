import React from 'react';
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFile } from 'react-icons/fa';
import '../assets/Css/Accordion.css'

function Finance() {
  const subItems =[
    { path:"/invoices", name: "Invoices" },
    { path:"/expense", name: "Expense" },
  ]
  return (
    <>
            <Accordion flush >
              <Accordion.Item eventKey="0">
                <Accordion.Header className="custom-accordion-header">
                  <div className="d-flex align-items-center w-100" style={{color: "#555"}}>
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