import React from 'react';
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import '../assets/Css/Accordion.css'

function RealEstate() {
  const estateItems = [
    { path: "/properties", name: "Properties" },
    { path: "/units", name: "Units" }
  ]
  return (
    <>
        <Accordion flush >
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion-header">
              <div className="d-flex align-items-center w-100">
                <FaHouse className="me-2" />
                Real Estate
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {estateItems.map((item, index) => (
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

export default RealEstate