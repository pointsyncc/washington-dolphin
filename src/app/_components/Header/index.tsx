'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
{
  /* eslint-disable @next/next/no-img-element */
}
export function Header() {
  const pathname = usePathname();
  const contacts = [
    {
      text: 'Zagrebačka cesta 45, 10382, Goričica',
      icon: '/svgs/location.svg',
      name: 'location',
      width: 14,
      height: 20,
    },
    {
      text: 'pekarnamario@gmail.com',
      icon: '/svgs/message.svg',
      name: 'message',
      width: 17.5,
      height: 14,
    },
    {
      text: '+385 98 139 1548',
      icon: '/svgs/phone.svg',
      name: 'phone',
      width: 18.64,
      height: 18.64,
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
      path: '/products',
      text: 'Proizvodi',
    },
    {
      path: '/contact',
      text: 'Kontakt',
    },
  ]
  return (
    <>
      <header className=" absolute top-[54px] px-[54px] w-full left-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {contacts.map(contact => (
              <div key={contact.name} className="flex items-center pl-[22px]">
                <Image
                  src={contact.icon}
                  alt={contact.name}
                  width={contact.width}
                  height={contact.height}
                />
                <span className="pl-[10px] text-white">{contact.text}</span>
              </div>
            ))}
          </div>
          <button className="bg-secondary flex items-center px-[25px] py-[14px] rounded-[20px]">
            <Image src={'/svgs/bell.svg'} width={16} height={20} alt="bell" />
            <p className="m-0 pl-[14px] text-white">OVU NEDJELJU NE RADIMO</p>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <Image src={'/logo.png'} alt={'logo'} width={229} height={118} />
          <div className="flex items-center justify-between w-[432px] px-[24px] h-[50px] bg-white opacity-[66%] rounded-[20px]">
            {links.map((link)=><Link key={link.text}  href={link.path} className={`font-[plus-jakarta-sans] font-[700] ${pathname===link.path?'text-primary':''}`}>{link.text}</Link>)}

          </div>
        </div>
      </header>
    </>
  )
}
