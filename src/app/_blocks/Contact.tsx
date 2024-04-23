import React, { useEffect, useState } from 'react'

import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { Form, Page } from '@/payload/payload-types'
import { ContactForm } from '../components/contact/ContactFormNew'
import { fetchTopbar } from '../_api/fetchGlobals'
import { ContactInfo } from '../(pages)/components/navigation/ContactInfo'
import { Section } from '@/components/layout/Section'

type TContactProps = Extract<Page['layout'][0], { blockType: 'contact' }>

export const Contact = ({ description, contactForm }: TContactProps) => {
  const [topbar, setTopbar] = useState(null)
  //   const topbar = await fetchTopbar()
  useEffect(() => {
    ;(async () => {
      try {
        const data = await fetchTopbar()
        setTopbar(data)
      } catch (error) {
        //console.log('error')
      }
    })()
  }, [])
  const contacts = [
    {
      icon: FaMapMarkerAlt,
      href: topbar?.location?.url ?? 'https://maps.app.goo.gl/Tow1vwwy4AweQLMh8',
      children: topbar?.location?.label ?? 'Zagrebačka cesta 45, 10382, Goričica',
    },
    {
      icon: FaEnvelope,
      href: `mailto:${topbar?.email?.url ?? 'pekarnamario@gmail.com'}`,
      children: topbar?.email?.label ?? 'pekarnamario@gmail.com',
    },
    {
      icon: FaPhone,
      href: `tel:${topbar?.phone?.url ?? '+385 98 139 1548'}`,
      children: topbar?.phone?.label ?? '+385 98 139 1548',
    },
  ]
  return (
    <Section className='py-0' containerProps={{className:'flex xl:flex-row flex-col justify-center items-start xl:items-center lg:justify-between'}}>
      <div className="xl:basis-[40%] xl:max-w-[40%] sm:max-w-[100%] sm:basis-[100%] pr-[0px] lg:pr-[15px]">
        <p className="text-[20px] text-primary leading-[37px] w-full xl:pr-[20px] mb-[50px]">
          {description}
        </p>
        <div className="xl:hidden block mb-[50px]">
          <ContactForm formData={contactForm as Form} />
        </div>
        <ContactInfo
          links={contacts}
          className="lg:flex-col w-full sm:w-auto gap-6 sm:gap-6 mt-12"
        />

        <iframe
          className="border-[2px] border-primary xl:h-[350px] h-[500px] mt-[50px] xl:w-[544px] max-w-full w-full rounded-sm sepia-[.50]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.771631884349!2d16.198850475904496!3d45.89588030453334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476671569b152dc5%3A0x8161f1ba693c246d!2sZagreba%C4%8Dka%20cesta%2045%2C%2010382%2C%20Gori%C4%8Dica%2C%20Croatia!5e0!3m2!1sen!2s!4v1713529275013!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="xl:block hidden">
        <ContactForm formData={contactForm as Form} />
      </div>
    </Section>
    // <div className="flex xl:flex-row flex-col justify-center items-start xl:items-center lg:justify-between w-full xl:px-[80px] lg:px-[60px] md:px-[40px] sm:px-[20px] px-0 pt-[60px]">

    //   <div className="xl:basis-[40%] xl:max-w-[40%] sm:max-w-[100%] sm:basis-[100%] pr-[15px]">
    //     <p className="text-[20px] text-primary leading-[37px] w-full  xl:pr-[20px] mb-[50px]">
    //       {description}
    //     </p>
    //     <div className="xl:hidden block mb-[50px]">
    //       <ContactForm formData={contactForm} />
    //     </div>
    //     <ContactInfo
    //       links={contacts}
    //       className="lg:flex-col w-full sm:w-auto gap-6 sm:gap-6 mt-12"
    //     />

    //     <iframe
    //       className="border-[2px] border-primary xl:h-[350px] h-[500px] mt-[50px] xl:w-[544px] w-full rounded-sm sepia-[.80]"
    //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.771631884349!2d16.198850475904496!3d45.89588030453334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476671569b152dc5%3A0x8161f1ba693c246d!2sZagreba%C4%8Dka%20cesta%2045%2C%2010382%2C%20Gori%C4%8Dica%2C%20Croatia!5e0!3m2!1sen!2s!4v1713529275013!5m2!1sen!2s"
    //       allowFullScreen
    //       loading="lazy"
    //       referrerPolicy="no-referrer-when-downgrade"
    //     ></iframe>
    //   </div>

    //   <div className="xl:block hidden">
    //     <ContactForm formData={contactForm} />
    //   </div>
    // </div>
  )
}
