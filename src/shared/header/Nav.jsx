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

        <div>
          <ul className='flex gap-12 items-center'>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-md font-semibold':''} to="/">Home</NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-md font-semibold':''} to="/shop">Shop</NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-md font-semibold':''} to="/blog">Blog</NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-md font-semibold':''} to="/about">About</NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'text-[#5CAF90] text-md font-semibold':''} to="/contact">Contact</NavLink> </li>
          </ul>

        </div>

        <div>
         <Btn text="Shop Now"></Btn>
        </div>
      </div>
    </div>
  )
}
