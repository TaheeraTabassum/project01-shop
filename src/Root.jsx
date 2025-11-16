import React from 'react'
import { Outlet } from 'react-router'
import Header from './shared/header/Header'
import Footer from './shared/Footer'

export default function Root() {
  return (
    <div>
      <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
