import React from 'react';
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaWrench } from 'react-icons/fa6';

function Maintenance() {
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
                    <FaWrench className="me-2" />
                    Maintenance
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

export default Maintenance