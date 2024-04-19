import React from 'react'
import { Link, TLinkProps } from './Link'
import { IconType } from 'react-icons'
import { cn } from '@/utils/classMerge'

type TLinkWithIconProps = TLinkProps & {
  icon: IconType
  iconPosition?: 'prepend' | 'append'
}

const LinkWithIcon = ({
  icon,
  children,
  iconPosition = 'prepend',
  className,
  ...rest
}: TLinkWithIconProps) => {
  const Icon = icon
  return (
    <Link className={cn('flex items-center gap-2', className)} {...rest}>
      {iconPosition === 'prepend' && <Icon className='text-secondary'/>}
      {children}
      {iconPosition === 'append' && <Icon className='text-secondary'/>}
    </Link>
  )
}

export { type TLinkWithIconProps, LinkWithIcon }
