import React from 'react'
import { HeroSection } from './(pages)/components/home/HeroSection'
import { History } from './(pages)/components/home/History'
import Products from './(pages)/components/home/Products'
import { ContactUs } from './(pages)/components/home/ContactUs'

const page = () => {
  return (
    <>
      <HeroSection />
      <History />
      <Products />
      <ContactUs />
    </>
  )
}

export default page
