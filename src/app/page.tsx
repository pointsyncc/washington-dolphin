import React from 'react'
import { HeroSection } from './(pages)/components/home/HeroSection'
import { History } from './(pages)/components/home/History'
import Products from './(pages)/components/home/Products'


const page = () => {
  return (
    <>
      <HeroSection />
      <History />
      <Products/>
    </>
  )
}

export default page
