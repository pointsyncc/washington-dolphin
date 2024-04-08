'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { TiThMenu as MenuIcon } from 'react-icons/ti'
import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaRegBell } from 'react-icons/fa'
{
  /* eslint-disable @next/next/no-img-element */
}
export function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)
  const contacts = [
    {
      text: 'Zagrebačka cesta 45, 10382, Goričica',
      icon: <FaLocationDot className=" text-primary md:text-white" />,
      name: 'location',
    },
    {
      text: 'pekarnamario@gmail.com',
      icon: <IoMdMail className="text-primary md:text-white" />,
      name: 'message',
    },
    {
      text: '+385 98 139 1548',
      icon: <FaPhoneAlt className="text-primary md:text-white" />,
      name: 'phone',
    },
  ]

  const links = [
    {
      path: '/',
      text: 'Početna',
    },
    {
      path: '/aboutus',
      text: 'O nama',
    },
    {
      path: '/product',
      text: 'Proizvodi',
    },
    {
      path: '/contact',
      text: 'Kontakt',
    },
  ]
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
      scrollTo({top:0,behavior:'smooth'})
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [openMenu])
  const openMenuHandler = () => setOpenMenu(!openMenu)

  return (
    <>
      <header className="absolute top-[54px] sm:px-[54px] px-[40px] w-full left-0">
        <div className="flex flex-col xl:flex-row  justify-between items-center">
          <div className="items-center xl:justify-start justify-center xl:py-0 py-[5px] xl:rounded-[0px] rounded-[20px]  xl:mb-0 mb-[10px] md:flex hidden w-full xl:w-auto">
            {contacts.map((contact, i) => (
              <div
                key={contact.name}
                className={`flex items-center xl:pl-[22px] pl-[11px] ${i === 0 ? 'pl-0' : ''}`}
              >
                {contact.icon}
                <span className="pl-[10px] text-white xl:text-[16px] text-[12px]">
                  {contact.text}
                </span>
              </div>
            ))}
          </div>
          <button className="bg-secondary sm:mb-0 mb-[20px] flex items-center self-center sm:self-end xl:px-[25px] px-[15px]  rounded-[20px] text-white">
            <FaRegBell className="" />
            <p className="m-0 pl-[14px]  xl:text-[16px] text-[12px]">OVU NEDJELJU NE RADIMO</p>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <Image
            className="max-w-[70%] md:max-w-[100%] translate-x-[-18px]"
            src={'/logo.png'}
            alt={'logo'}
            width={229}
            height={0}
          />
          <div className="">
            <button
              onClick={openMenuHandler}
              className="p-[10px] bg-white opacity-[66%] rounded-[5px]  block md:hidden"
            >
              <MenuIcon className="text-primary font-bold" />
            </button>

            <div
              className={`md:w-[432px] px-[24px] h-[100vh] md:h-[50px]  md:opacity-[66%] md:rounded-[20px] rounded-[5px] md:py-[0px] py-[10px] md:static ${openMenu ? 'opacity-100 translate-y-0 select-auto pointer-events-auto z-40' : 'opacity-0 translate-y-2 select-none pointer-events-none md:select-auto md:pointer-events-auto'} bg-white absolute top-[-54px] right-0 w-[100vw]  transition-all duration-500  overflow-hidden`}
            >
              {/* close menu icon */}
              <button
                onClick={() => setOpenMenu(false)}
                className="block md:hidden w-full text-right"
              >
                <IoMdClose className="text-primary text-[40px] text-right ml-auto" />
              </button>
              <div className="flex flex-col justify-between h-[90%]">
                {/* link */}
                <div className="flex md:items-center md:flex-row flex-col md:justify-between md:h-full md:mt-0 mt-[20px] ">
                  {links.map(link => (
                    <Link
                      key={link.text}
                      href={link.path}
                      className={` hover:text-primary font-[plus-jakarta-sans] font-[700] md:py-0 py-[10px] ${pathname === link.path ? 'text-primary' : ''}`}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
                {/* contact links */}
                <div className="flex md:hidden flex-col justify-center ">
                  {contacts.map((contact, i) => (
                    <div
                      key={contact.name}
                      className={`flex items-center mt-[20px] ${i === 0 ? 'pl-0' : ''}`}
                    >
                      {contact.icon}
                      <span className="pl-[10px] text-[14px] font-bold">{contact.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
