import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer />

    </div>
  )
}

export default RootLayout