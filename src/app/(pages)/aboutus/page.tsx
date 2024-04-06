'use client'
import Image from 'next/image'
import HeroSection from '../../components/common/hero-section'

const Aboutus = () => {
  return (
    <>
      <HeroSection pageTitle="O nama" pageName='about-us' />
      <div className="flex justify-center w-full">
        <div className="w-[800px]">
          <h2 className="font-[700] text-[32px] text-center">
            Bogata povijest i obiteljska tradicija
          </h2>
          <p className="pt-[38px]">
            Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u
            vezi s nekim našim proizvodom ili proizvodnim procesom? Želite nam se obratiti radi
            ostvarenja ili unaprijeđenja poslovne suradnje? Nemojte čekati, slobodno nas
            kontaktirajte!
          </p>
        </div>
      </div>

      <div className="flex pt-[84px]">
        <div className="relative basis-[100%] max-w-[100%]">
          <Image
            style={{ width: '100%', height: 'auto' }}
            src={'/about-us/about-us-image-1.png'}
            alt="about-us-bg-left"
            width={1200}
            height={521}
          />
        </div>

        <div className="flex flex-col ml-[20px] relative basis-[100%] max-w-[100%]">
          <Image
            src={'/about-us/about-us-image-2.png'}
            alt="about-us-bg-right-top"
            width={435}
            height={250}
          />

          <Image
            src={'/about-us/about-us-image-3.png'}
            alt="about-us-bg-right-bottom"
            className="mt-[10px]"
            width={435}
            height={250}
          />
        </div>
      </div>
    </>
  )
}

export default Aboutus
