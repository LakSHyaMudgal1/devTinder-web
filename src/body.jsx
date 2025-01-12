import React from 'react'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const body = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
    
  )
}

export default body