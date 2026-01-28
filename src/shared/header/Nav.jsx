import React from 'react'
import { NavLink } from 'react-router'
import Btn from '../Btn'

export default function Nav() {
  return (
    <div>
      <div className='flex justify-between items-center container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 my-2 '>
        <div>
          <Btn text="All Categories"></Btn>
        </div>

        <div className='hidden lg:block'>
          <ul className='flex gap-12 items-center  text-[#5CAF90]'>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-lg  font-bold':''} to="/">Home</NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-lg  font-bold':''} to="/shop">Shop</NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-lg  font-bold':''} to="/blog">Blog</NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-lg  font-bold':''} to="/about">About</NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-lg  font-bold':''} to="/contact">Contact</NavLink> </li>
          </ul>

        </div>

        <div>
         <Btn text="Shop Now"></Btn>
        </div>
      </div>
    </div>
  )
}
