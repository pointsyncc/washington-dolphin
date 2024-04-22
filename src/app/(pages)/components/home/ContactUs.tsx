import { Section } from '@/components/layout/Section'
import React from 'react'
import HeroSection from 'src/app/components/common/hero-section'
import { ContactForm } from 'src/app/components/contact/contact-form'

export const ContactUs = () => {
  return (
    <HeroSection bgURL="/home-contact-bg.jpg" className='h-screen md:h-screen flex items-center px-6'>
      <ContactForm />
    </HeroSection>
  )
}
