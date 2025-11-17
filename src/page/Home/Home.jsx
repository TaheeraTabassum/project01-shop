import React from 'react'
import Hero from './components/Hero'
import HomeCategory from './components/HomeCategory'
import PopularProducts from './components/PopularProducts/PopularProducts'
import LatestExclusive from './components/LatestExclusive'
import NewProducts from './components/NewProducts'
import Support from './components/Support'
import Collection from './components/Collection.Jsx'


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <HomeCategory></HomeCategory>
      <PopularProducts></PopularProducts>
      <LatestExclusive></LatestExclusive>
      <NewProducts></NewProducts>
      <Collection></Collection>
      <Support></Support>
    </div>
  )
}
