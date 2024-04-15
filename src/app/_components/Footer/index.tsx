import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
export async function Footer() {
  const contacts = [
    {
      text: 'Zagrebačka cesta 45, 10382, Goričica',
      icon: <FaLocationDot className="text-[#CEA66B]" />,
      name: 'location',
    },
    {
      text: 'pekarnamario@gmail.com',
      icon: <IoMdMail className="text-[#CEA66B]" />,
      name: 'message',
    },
    {
      text: '+385 98 139 1548',
      icon: <FaPhoneAlt className="text-[#CEA66B]" />,
      name: 'phone',
    },
  ]

  return (
    <footer>
      <div className="bg-[#313131] rounded-[20px] px-[15px] sm:px-[46px] pt-[30px] pb-[60px]">
        <div className="flex lg:flex-row flex-col justify-between lg:mt-0 mt-[20px]">
          <div className="">
            {/* image */}
            <Image
              src={'/logo-footer.png'}
              alt={'logo'}
              width={229}
              height={118}
              className="mx-auto sm:mx-0"
            />
            {/* contacts */}
            <div className='flex justify-center w-full sm:w-auto sm:block '>
            <div className="flex flex-col  lg:w-auto lg:mt-[50px] my-[15px]">
              {contacts.map(contact => (
                <div key={contact.name} className="flex items-center lg:pl-[22px] mt-[20px]">
                  {contact.icon}
                  <span className="pl-[10px]  text-white sm:text-[16px] text-[14px]">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col sm:items-center justify-between text-white mt-[30px] lg:mt-0">
            <h2 className="lg:text-[32px] sm:text-[25px] text-[20px] font-[700] text-center sm:text-start">
              Imaš pitanje za nas?
            </h2>
            <button className="lg:ml-[30px] sm:ml-[25px] sm:mt-[0] mt-[20px]  border-[2px] border-white rounded-[10px]  px-[15px] lg:px-[35px] sm:py-[15px] py-[10px] lg:py-[17px] transition-all hover:bg-primary sm:w-auto w-[90%] mx-auto sm:mr-0">
              Kontaktiraj nas
            </button>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center px-[0px]  md:px-[40px] py-[14px]">
        <p className="text-[14px] leading-[20px] sm:leading-[38px] text-center md:text-start mt-[20px] md:mt-0">
          Pekarna Mario © 2024. | Sva prava pridržana.
        </p>
        <div className="flex items-center mt-[20px] md:mt-0">
          <Link className="text-[14px] hover:text-primary" href={'/privacy-policy'}>
            Politika privatnosti
          </Link>
          <Link className="text-[14px] hover:text-primary pl-[16px]" href={'/terms-of-use'}>
            Uvjeti korištenja
          </Link>
        </div>
      </div>
    </footer>
  )
}
