import React from 'react'
import { Outlet } from 'react-router'
import Header from './shared/header/Header'

export default function Root() {
  return (
    <div>
      <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
