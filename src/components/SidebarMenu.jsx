import React from 'react'
import { 
  FaUser,
  FaUserPlus,
  // FaGaugeSimpleHigh,
  // FaHouse,
  // FaWrench,
  FaFile,
  // FaPhoneVolume,
  // FaBell,
  // FaGear
 } from "react-icons/fa";
 import { FaGaugeSimpleHigh } from "react-icons/fa6";
 import { NavLink } from 'react-router-dom';
import StaffManagement from './StaffManagement';
import RealEstate from './RealEstate';


function SidebarMenu( {show, isOpen} ) {
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaGaugeSimpleHigh />
    },
    {
      component: <StaffManagement />
    },
    {
      path: "/tenant",
      name: "Tenant",
      icon: <FaUser />
    },
    {
      path: "/maintainer",
      name: "Maintainers",
      icon: <FaUserPlus />
    },
    {
      component: <RealEstate />
    },
    {
      path: "/finance",
      name: "Finance",
      icon: <FaFile />
    }
  ]
  return (
    <div className='menu-list'>
      {menuItems.map((item, index) =>(
        // <NavLink key={index} to={item.path} className='menu-item d-flex text-decoration-none py-3'>
        //   {item.icon}
        //   <span className='ps-2' >{item.name}</span>
        // </NavLink>
        item.component ? (
          item.component
        ) : (
        <NavLink to={item.path} key={index} className={({ isActive }) => isActive ? "link active" : "link"}>
          <div className="icon">{item.icon}</div>
          <div  className="link_text">{item.name}</div>
        </NavLink>
        )
      ))}
    </div>
  )
}

export default SidebarMenu


