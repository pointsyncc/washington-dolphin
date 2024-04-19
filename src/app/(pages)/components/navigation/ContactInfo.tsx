import { LinkWithIcon, TLinkWithIconProps } from '@/components/navigation/LinkWithIcon'
import { cn } from '@/utils/classMerge'
import React, { ComponentPropsWithoutRef } from 'react'
type TContactInfoProps  = ComponentPropsWithoutRef<'ul'> & {
    links:TLinkWithIconProps[]

}
export const ContactInfo = ({ links,className,...rest }:TContactInfoProps) => {
  return (
    <ul className={cn("flex-col sm:flex-row flex gap-0 sm:gap-4",className)} {...rest}>
      {links.map(link => (
        <li key={link.children.toString()}>
          <LinkWithIcon {...link} />
        </li>
      ))}
    </ul>
  )
}
