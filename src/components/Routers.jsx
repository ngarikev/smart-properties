import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Finance from './Finance'
import Maintainers from '../pages/Maintainers'
import RealEstate from './RealEstate'
import Users from '../pages/Users'
import Tenants from '../pages/Tenants'
import Content from '../layout/content/Content'
import Roles from '../pages/Roles'
import Properties from '../pages/Properties'
import Units from '../pages/Units'


function Routers() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Content />}>
        <Route index element={<Dashboard />} />
        <Route path="finance" element={<Finance />} />
        <Route path="maintainer" element={<Maintainers />} />
        <Route path="properties" element={<Properties />} />
        <Route path="units" element={<Units />} />
        <Route path="users" element={<Users />} />
        <Route path="roles" element={<Roles />} />
        <Route path="tenant" element={<Tenants />} />
      </Route>
     </Routes>
    </div>
  )
}

export default Routers