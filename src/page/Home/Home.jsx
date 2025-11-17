import React from 'react'
import Hero from './components/Hero'
import HomeCategory from './components/HomeCategory'
import PopularProducts from './components/PopularProducts/PopularProducts'

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <HomeCategory></HomeCategory>
      <PopularProducts></PopularProducts>
    </div>
  )
}
