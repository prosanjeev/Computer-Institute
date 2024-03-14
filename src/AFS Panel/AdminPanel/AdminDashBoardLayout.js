import React from 'react'
import TopNav from './components/TopNav'
import Sidenav from './components/Sidenav'
import { Outlet } from 'react-router-dom'

const AdminDashBoardLayout = () => {
  return (
    <>
        <TopNav/>
        <Sidenav/>
        <Outlet/>
    </> 
  )
}

export default AdminDashBoardLayout