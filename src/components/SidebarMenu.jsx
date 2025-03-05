import React from 'react'
import { 
  FaUser,
  FaUsers,
  FaUserPlus,
  // FaGaugeSimpleHigh,
  // FaHouse,
  // FaWrench,
  FaFile,
  // FaPhoneVolume,
  // FaBell,
  // FaGear
 } from "react-icons/fa";
 import { FaGaugeSimpleHigh, FaHouse } from "react-icons/fa6";
 import { NavLink } from 'react-router-dom';


function SidebarMenu( {show, isOpen} ) {
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaGaugeSimpleHigh />
    },
    {
      path: "/staff-management",
      name: "Staff Management",
      icon: <FaUsers />
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
      path: "/real-estate",
      name: "Real Estate",
      icon: <FaHouse />
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
        <NavLink to={item.path} key={index} className={({ isActive }) => isActive ? "link active" : "link"}>
        <div className="icon">{item.icon}</div>
        <div  className="link_text">{item.name}</div>
    </NavLink>
      ))}
    </div>
  )
}

export default SidebarMenu


