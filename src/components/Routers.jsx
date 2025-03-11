import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Finance from '../pages/Finance'
import Maintainers from '../pages/Maintainers'
import RealEstate from '../pages/RealEstate'
import Users from '../pages/Users'
import Tenants from '../pages/Tenants'
import Content from '../layout/content/Content'


function Routers() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Content />}>
        <Route index element={<Dashboard />} />
        <Route path="finance" element={<Finance />} />
        <Route path="maintainer" element={<Maintainers />} />
        <Route path="real-estate" element={<RealEstate />} />
        <Route path="users" element={<Users />} />
        <Route path="tenant" element={<Tenants />} />
      </Route>
     </Routes>
    </div>
  )
}

export default Routers