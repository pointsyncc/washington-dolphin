import HeroSection from '../../components/common/hero-section'
import { ContactForm } from '../../components/contact/contact-form'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center lg:items-start lg:flex-row flex-col lg:justify-between w-full xl:px-[80px] lg:px-[60px] md:px-[40px] sm:px-[20px] px-0">
        <p className="text-[20px] leading-[37px] xl:w-[50%] lg:w-[60%] w-full pr-[20px] mb-[40px] lg:mb-0">
          Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u
          vezi s nekim našim proizvodom ili proizvodnim procesom? Želite nam se obratiti radi
          ostvarenja ili unaprijeđenja poslovne suradnje? Nemojte čekati, slobodno nas
          kontaktirajte!
        </p>
        <ContactForm />
      </div>

      <div className="w-full mt-[120px]">
        <h2 className="font-[700] lg:text-[32px] text-[25px] text-center">Lokacije poslovnica</h2>
        <iframe
          className="w-full h-[600px] mt-[33px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28831.47044823137!2d68.36971185!3d25.40702625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1712383957138!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-white bg-[#CEA66B] rounded-[20px] py-[30px] px-[20px] sm:px-[45px] w-full sm:w-[500px] mt-[84px]">
        <h2 className="font-[700] lg:text-[32px] text-[25px] text-center ">Pekarna Mario</h2>

        <div className=" pt-[48px]">
          <h3 className="font-[700] text-[18px] sm:text-[22px]">Otvoreno danas 6:00 - 20:00</h3>
          <div className="flex items-center pt-[16px]">
            <FaLocationDot className="" />
            <p className="pl-[10px] text-[16px] sm:text-[18px] leading-[20px]">
              Zagrebačka cesta 45, 10382, Goričica
            </p>
          </div>
        </div>

        <div className="text-[16px] sm:text-[18px]  pt-[30px]">
          <h3 className="font-[700] text-[18px] sm:text-[22px]">Redovno radno vrijeme</h3>
          <div className="flex items-center justify-between pt-[18px]">
            <p>Pon - Pet</p>
            <p>6:00 - 20:00</p>
          </div>
          <div className="flex items-center justify-between pt-[18px]">
            <p>Subota</p>
            <p>6:00 - 20:00</p>
          </div>
          <p className="pt-[18px] text-[16px] sm:text-[18px]">Nedjelja</p>
        </div>

        <div className="pt-[30px]">
          <h3 className="font-[700] text-[18px] sm:text-[22px]">Broj telefona</h3>
          <div className="flex items-center">
            <FaPhoneAlt />
            <p className="  pl-[10px]">
              <a href="tel:+385 98 139 1548" className="text-[14px] sm:text-[18px]">
                +385 98 139 1548
              </a>
            </p>
          </div>
        </div>

        <div className="pt-[30px]">
          <h3 className="font-[700] text-[18px] sm:text-[22px]">E-mail adresa</h3>
          <div className="flex items-center">
            <IoMdMail />
            <p className="    pl-[10px]">
              <a href="mailto:pekarnamario@gmail.com" className="text-[14px] sm:text-[18px]">
                pekarnamario@gmail.com
              </a>
            </p>
          </div>
        </div>
        <button className="border-white text-[18px] sm:text-[20px] text-white mt-[10px]">Posjeti lokaciju</button>
      </div>
    </>
  )
}

export default Contact
