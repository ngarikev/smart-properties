// import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
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
import Login from '../pages/Authentication/Login' // Add your login component
import useAuth from '../hooks/useAuth' // Create this custom hook
import AuthLayout from '../layout/AuthLayout' // Your AuthLayout component

import AllRequests from '../pages/AllRequests'
import Pending from '../pages/Pending'
import InProgress from '../pages/InProgress'



function Routers() {
  const { isAuthenticated } = useAuth()
  return (
    <div>
      <Routes>
        {/* Auth routes (login, register, etc.) */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          {/* Add other auth routes like register, forgot-password, etc. */}
        </Route>

        {/* Protected main app routes */}
        <Route path="/" element={isAuthenticated ? <Content /> : <Navigate to="/auth/login" />}>
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
          <Route path="maintenance-request" element={<AllRequests />} />
          <Route path="maintenance-request/pending" element={<Pending />} />
          <Route path="maintenance-request/in-progress" element={<InProgress />} />
        </Route>

        {/* Redirects */}
        {/* <Route path="/login" element={<Navigate to="/auth/login" replace />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/auth/login"} replace />} /> */}
      </Routes>
    </div>
  )
}

export default Routers