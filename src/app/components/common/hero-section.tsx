import { url } from 'inspector';
import React from 'react'
// interface Props{
//     imageSource:string;
// }
const HeroSection = ({ pageTitle,pageName }: { pageTitle: string;pageName:string; }) => {
  const imageSource=`/${pageName}/bg.png`
  return (
    <div style={{backgroundImage:`url(${imageSource})`}} className={`bg-no-repeat bg-cover w-full h-[500px] flex items-end mb-[80px] rounded-[20px]`}>
      <h1 className='text-white sm:text-5xl text-4xl font-[700] sm:pl-[60px] sm:pb-[60px] pl-[20px] pb-[40px]'>{pageTitle}</h1>
   </div>
  )
}

export default HeroSection
