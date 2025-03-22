import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Finance from './Finance'
import Maintainers from '../pages/Maintainers'
import Users from '../pages/Users'
import Tenants from '../pages/Tenants' 
import Content from '../layout/content/Content'
import Roles from '../pages/Roles'
import Properties from '../pages/Properties'
import Units from '../pages/Units'
import ContactDiary from '../pages/ContactDiary'
import Types from '../pages/Types'
import Invoices from '../pages/Invoices'
import Expense from '../pages/Expense'


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
        <Route path="contacts-diary" element={<ContactDiary />} />
        <Route path="types" element={<Types />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="expense" element={<Expense />} />
      </Route>
     </Routes>
    </div>
  )
}

export default Routers