import React from 'react'
import {Outlet} from "react-router-dom"
import AdminHeader from '../Header'
import AdminFooter from '../Footer'

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <main>
      <Outlet></Outlet>
      </main>
      <AdminFooter></AdminFooter>
    </div>
  )
}

export default AdminLayout
