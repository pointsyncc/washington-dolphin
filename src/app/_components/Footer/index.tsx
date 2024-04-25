import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
// import { IoMdMail } from 'react-icons/io'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { ContactInfo } from 'src/app/(pages)/components/navigation/ContactInfo'
import { TLinkWithIconProps } from '../navigation/LinkWithIcon'
// import { Field } from 'payload/types'
import { Header, Topbar } from '@/payload/payload-types'
import { Container } from '../grid/Container'
import { MdArrowOutward } from 'react-icons/md'
export async function Footer({
  location,
  email,
  phone,
  navLinks,
}: {
  location: Topbar['location']
  email: Topbar['email']
  phone: Topbar['phone']
  navLinks: Header['navItems']
}) {
  const links: TLinkWithIconProps[] = [
    {
      icon: FaMapMarkerAlt,
      href: location?.url ?? 'https://maps.app.goo.gl/Tow1vwwy4AweQLMh8',
      children: location?.label ?? 'Zagrebačka cesta 45, 10382, Goričica',
      className: 'text-accent hover:text-accent',
    },
    {
      icon: FaEnvelope,
      href: `mailto:${email?.url ?? 'pekarnamario@gmail.com'}`,
      children: email?.label ?? 'pekarnamario@gmail.com',
      className: 'text-accent hover:text-accent',
    },
    {
      icon: FaPhone,
      href: `tel:${phone?.url ?? '+385 98 139 1548'}`,
      children: phone?.label ?? '+385 98 139 1548',
      className: 'text-accent hover:text-accent',
    },
  ]

  return (
    <Container>
      <footer>
        <div className="bg-primary rounded-sm px-4 sm:px-10 pt-[30px] pb-[60px]">
          <div className="flex lg:flex-row flex-col justify-between items-start px-6 lg:px-0 mx-auto lg:mt-0 mt-[20px]">
            <div className="w-full">
              <Image
                className="mx-auto sm:mx-0 max-w-[190px] lg:max-w-[100%] w-full sm:w-auto"
                src={'/logo-footer.png'}
                alt={'logo'}
                width={229}
                height={118}
              />
              {/* contacts */}
              <div className="flex justify-center items-center w-full sm:w-auto sm:block ">
                <ContactInfo links={links} className="lg:flex-col sm:w-auto gap-5 sm:gap-6 mt-8" />
              </div>
            </div>
            <div className='mt-8 lg:mt-0'>
              <h6 className='text-[#cda56a] font-bold text-lg lg:text-xl mb-3 lg:mb-5'>Korisni linkovi</h6>
              <nav className="flex flex-col gap-3.5">
                {navLinks.map((navLink) => (
                  <Link key={navLink.id + '_' + navLink.link.label.toLowerCase()} href={navLink.link.url} className='text-[#fef7d0] text-sm hover:underline'>
                    {navLink.link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex sm:flex-row flex-col sm:items-center justify-between text-secondary mt-8 w-full lg:mt-0">
              <h2 className="lg:text-[32px] sm:text-[25px] text-lg font-[700] text-center sm:text-start">
                Imaš pitanje za nas?
              </h2>
              <Link
                href={'/kontakt'}
                className="lg:ml-[30px] flex gap-3.5 justify-center items-center sm:ml-[25px] sm:mt-[0] mt-4 border-[2px] border-secondary rounded-[10px]  px-[15px] lg:px-[35px] sm:py-[15px] py-[10px] lg:py-[17px] transition-all bg-secondary text-primary sm:w-auto w-[90%] mx-auto sm:mr-0 text-center"
              >
                Kontaktiraj nas
                <MdArrowOutward className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row text-primary flex-col-reverse justify-between items-center px-[0px]  md:px-[40px] pt-[8px] pb-[14px] md:py-[14px]">
          <p className="!text-[13px] leading-[20px] sm:leading-[38px] text-center md:text-start mt-[10px] md:mt-0">
            Pekarna Mario © 2024. | Sva prava pridržana.
          </p>
          <div className="flex items-center mt-[10px] md:mt-0">
            <Link
              className="text-[13px] hover:text-secondary underline"
              href={'/politika-privatnosti'}
            >
              Politika privatnosti
            </Link>
            <Link
              className="text-[13px] hover:text-secondary pl-[16px] underline"
              href={'/politika-kolacica'}
            >
              Politika kolačića
            </Link>
          </div>
        </div>
      </footer>
    </Container>
  )
}
