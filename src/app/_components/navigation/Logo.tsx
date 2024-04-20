import React from 'react'
import { Link, TLinkProps } from './Link'
import { Image } from '../Media/Image'
import { Media } from '@/payload/payload-types'

type TLogoProps = TLinkProps & {
  logo: Media
}

export const Logo = ({ logo, ...rest }: TLogoProps) => {
  return (
    <Link {...rest} href="/">
      <Image
        className="max-w-[80px] md:max-w-[120px] 2xl:max-w-[216px]"
        src={logo?.url}
        alt={logo?.alt}
        width={logo?.width}
        height={logo?.height}
        responsive={false}
      />
    </Link>
  )
}
