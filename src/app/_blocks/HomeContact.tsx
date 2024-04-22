import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { Form, Page } from '@/payload/payload-types'
import React from 'react'
import HeroSection from 'src/app/components/common/hero-section'
import { ContactForm } from 'src/app/components/Contact/contact-form'

type THomeContactProps = Extract<Page['layout'][0], { blockType: 'homeContact' }>

export const HomeContact = ({
  heading,
  description,
  background,
  contactForm,
}: THomeContactProps) => {
  const bgURL = typeof background === 'string' ? background : background.url
  return (
    <HeroSection bgURL={bgURL} className="h-auto md:h-screen flex items-center px-6 py-[2.6875rem]">
      <ContactForm
        formData={contactForm as Form}
        contactFormPrepend={
          <div className='mb-6 space-y-3'>
            <Heading className='text-secondary' level={2}>{heading}</Heading>
            <Text className='text-white' level={1}>{description}</Text>
          </div>
        }
      />
    </HeroSection>
  )
}
