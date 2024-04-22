import { Container } from '@/components/grid/Container'
import { cn } from '@/utils/classMerge'
import { url } from 'inspector'
import React, { ComponentPropsWithRef } from 'react'

type THeroSectionProps = ComponentPropsWithRef<'div'> & {
  pageTitle?: string
  bgURL: string
  
}

const HeroSection = ({ pageTitle, className, bgURL,children }: THeroSectionProps) => {
  const imageSource = `${bgURL}`
  return (
    <Container>
      <div
        style={{ backgroundImage: `url(${imageSource})` }}
        className={cn(
          'bg-no-repeat bg-cover w-full h-[340px] md:h-[500px] flex items-end rounded-[20px] shadow-[inset_0_0px_0px_4000px_rgba(0,0,0,0.20)]',
          className,
        )}
      >
        {Boolean(pageTitle) && (
          <h1 className="text-[#DDB780] sm:text-5xl text-xl font-[700] sm:pl-[60px] sm:pb-[60px] pl-[20px] pb-[20px]">
            {pageTitle}
          </h1>
        )}
        {children}
      </div>
    </Container>
  )
}

export default HeroSection
