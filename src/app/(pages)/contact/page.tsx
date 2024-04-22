import HeroSection from '../../components/common/hero-section'
import { ContactForm } from '../../components/Contact/contact-form'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export const Contact = () => {
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
    <>
      <div className="flex xl:flex-row flex-col justify-center items-start xl:items-center lg:justify-between w-full xl:px-[80px] lg:px-[60px] md:px-[40px] sm:px-[20px] px-0 pt-[60px]">
        <div className="xl:basis-[40%] xl:max-w-[40%] sm:max-w-[100%] sm:basis-[100%] pr-[15px]">
          <p className="text-[20px] text-primary leading-[37px] w-full  xl:pr-[20px] mb-[50px]">
            Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u
            vezi s nekim našim proizvodom ili proizvodnim procesom? Želite nam se obratiti radi
            ostvarenja ili unaprijeđenja poslovne suradnje? Nemojte čekati, slobodno nas
            kontaktirajte!
          </p>
          <div className="xl:hidden block mb-[50px]">
            <ContactForm />
          </div>
          <div className="flex flex-col">
            {contacts.map((contact, i) => (
              <div key={contact.name} className={`flex items-center ${i !== 0 && 'mt-[20px]'}`}>
                {contact.icon}
                <span className="pl-[10px]  text-primary sm:text-[16px] text-[14px]">
                  {contact.text}
                </span>
              </div>
            ))}
          </div>

          <iframe
            className="border-[2px] border-primary xl:h-[350px] h-[500px] mt-[50px] xl:w-[544px] w-full rounded-[20px] sepia-[.80]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.771631884349!2d16.198850475904496!3d45.89588030453334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476671569b152dc5%3A0x8161f1ba693c246d!2sZagreba%C4%8Dka%20cesta%2045%2C%2010382%2C%20Gori%C4%8Dica%2C%20Croatia!5e0!3m2!1sen!2s!4v1713529275013!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="xl:block hidden">
          <ContactForm />
        </div>
      </div>
    </>
  )
}
