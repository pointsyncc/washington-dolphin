import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export async function Footer() {
  const contacts = [
    {
      text: 'Zagrebačka cesta 45, 10382, Goričica',
      icon: '/svgs/footer/location.svg',
      name: 'location',
      width: 14,
      height: 20,
    },
    {
      text: 'pekarnamario@gmail.com',
      icon: '/svgs/footer/message.svg',
      name: 'message',
      width: 17.5,
      height: 14,
    },
    {
      text: '+385 98 139 1548',
      icon: '/svgs/footer/phone.svg',
      name: 'phone',
      width: 18.64,
      height: 18.64,
    },
  ]

  return (
    <footer>
      <div className='bg-[#313131] rounded-[20px] px-[46px] pt-[30px] pb-[60px]'>
        <Image src={'/logo-footer.png'} alt={'logo'} width={229} height={118} />
        <div className="flex justify-between">
          <div className="flex flex-col mt-[50px]">
            {contacts.map(contact => (
              <div key={contact.name} className="flex items-center pl-[22px] mt-[20px]">
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
          <div className="flex items-center text-white">
            <h2 className="text-[32px] font-[700]">Imaš pitanje za nas?</h2>
            <button className="ml-[50px] border-[2px] border-white rounded-[10px] px-[35px] py-[17px] transition-all hover:bg-primary">
              Kontaktiraj nas
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center  px-[40px] py-[14px]">
        <p className="text-[14px]">Pekarna Mario © 2024. | Sva prava pridržana.</p>
        <div className="flex items-center">
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
