'use client'
import NextJsImage from '@/components/Media/NextImage'
import { cn } from '@/utils/classMerge'
import React, { ComponentPropsWithRef, useState } from 'react'
import Hero from 'src/app/components/common/hero-section'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import Product1 from '/public/product-1.jpg'
import Product2 from '/public/product-2.jpg'
import Product3 from '/public/product-3.jpg'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { Image } from '@/components/Media/Image'
import { Link } from '@/components/navigation/Link'
import { getPayloadLinkHref } from '@/utils/getPayloadLinkHref'
import { LinkWithIcon } from '@/components/navigation/LinkWithIcon'
import { MdArrowOutward } from 'react-icons/md'

type TGalleryItemTriggerProps = ComponentPropsWithRef<'div'> & {
  children: React.ReactNode
  bgURL: string
  pointClassName?: string
}

const GalleryItemTrigger = ({
  children,
  className,
  pointClassName,
  bgURL,
}: TGalleryItemTriggerProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        className={cn('flex gap-2 items-center btn-none', className)}
        onClick={setOpen.bind(null, true)}
      >
        <div
          className={cn(
            'bg-white border-[#FF9800] rounded-full border-4 w-[19px] h-[19px]',
            pointClassName,
          )}
        ></div>
        <div
          className="flex items-center justify-center bg-contain w-[5.25rem] h-[3.3125rem] rounded-[15px] text-white shadow-[inset_0_0px_0px_5.25rem_rgba(0,0,0,0.20)] font-medium"
          style={{ backgroundImage: `url(${bgURL})` }}
        >
          {children}
        </div>
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[Product1, Product2, Product3]}
        render={{ slide: NextJsImage }}
      />
    </>
  )
}

export const HomeHero = ({ heading, description, image, cta, galleryLink }: any) => {
  const ctaHref = getPayloadLinkHref(cta)
  const galleryLinkHref = getPayloadLinkHref(galleryLink)

  return (
    <Section className="lg:mt-32" containerProps={{ className: 'flex flex-col mt-8 lg:mt-0 lg:flex-row justify-between items-stretch space-y-6 space-y-reverse lg:space-y-0' }}>
      <div className="lg:w-1/2 lg:basis-1/2  space-y-6 flex flex-col pr-4 ">
        <Heading>{heading}</Heading>
        <Text level={1} className="lg:max-w-[33.5625rem]">
          {description}
        </Text>
        <div className="lg:!mt-auto space-x-5 hidden lg:flex">
          <Link
            href={ctaHref}
            className="bg-primary hover:!text-secondary !text-primary-foreground px-7 py-2.5 rounded-sm inline-block w-fit whitespace-nowrap"
          >
            {cta.label}
          </Link>
          <LinkWithIcon href={galleryLinkHref} icon={MdArrowOutward} iconPosition='append' className='w-fit whitespace-nowrap'>
            {galleryLink.label}
          </LinkWithIcon>
        </div>
      </div>
      <div className="lg:w-1/2 lg:basis-1/2 max-h-screen lg:block flex justify-center pt-8 lg:pt-0">
        <Image
          responsive={false}
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      </div>
      <div className="lg:!mt-auto flex lg:hidden space-x-5">
          <Link
            href={ctaHref}
            className="bg-primary hover:!text-secondary !text-primary-foreground px-7 py-2.5 rounded-sm inline-block w-fit whitespace-nowrap"
          >
            {cta.label}
          </Link>
          <LinkWithIcon href={galleryLinkHref} icon={MdArrowOutward} iconPosition='append' className='w-fit whitespace-nowrap'>
            {galleryLink.label}
          </LinkWithIcon>
        </div>
    </Section>
  )
}
