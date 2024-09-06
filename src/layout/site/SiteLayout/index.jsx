import React from 'react'
import SiteHeader from '../Header'
import { Outlet } from 'react-router-dom'
import SiteFooter from '../Footer'

const SiteLayout = () => {
  return (
    <div>
        <SiteHeader></SiteHeader>
        <main>
        <Outlet></Outlet>
        </main>
        <SiteFooter></SiteFooter>
      
    </div>
  )
}

export default SiteLayout
