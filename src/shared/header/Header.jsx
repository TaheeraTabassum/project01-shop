import React from 'react';

import { CiShoppingCart, CiUser } from "react-icons/ci";

import { Link } from 'react-router';
import TopHeader from './TopHeader';
import Nav from './nav';

export default function Header() {
 
  return (
    <div>
        <TopHeader></TopHeader>
        <div className='text-gray-200'>
          <hr />
        </div>
        <div>
             <div >
            <div className='flex flex-wrap items-center py-2 justify-between container  mx-auto px-4 sm:px-8 md:px-12 lg:px-24'>
                <img className='w-16 md:w-30' src="https://e-commerse-shop-tahira.netlify.app/assets/Tahira's-logo-transparent-D4FTvitO.png" alt="" />
                <div className='w-full md:w-auto order-3 md:order-2 mt-1 md:mt-0'>
                    <label className="input w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className='w-full lg:w-100' required placeholder="Search . . ." />
                    </label>
                </div>
                <div className='flex gap-5 order-2 md:order-3'>
                    <div className='flex items-center gap-1'>

                        <CiUser className='text-3xl' />
                        <div className='hidden md:block'>
                            <p className='ct text-xs'>Account</p>
                            <div className="flex gap-2">
                               <Link to="/login" className='ts'>LOGIN</Link>
                               <p className="ts">/</p>
                               <Link to="/register" className='ts'>REGISTER</Link>
                            </div>
                        </div>
                    </div>
                <div className='flex gap-1 items-center'>
                        <div>
                          <CiShoppingCart className='text-3xl' />
                        </div>
                       
                            <p className='ct text-xs'>Cart</p>
                            <p className='ts'>LOGIN</p>
                        </div>
                
                </div>
            </div>
        </div>
        </div>
        <div className='text-gray-200'>
          <hr />
        </div>
        <Nav></Nav>
        <div className='text-gray-200'>
          <hr />
        </div>
    </div>
  )
}


