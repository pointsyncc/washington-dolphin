import { LinkWithIcon, TLinkWithIconProps } from '@/components/navigation/LinkWithIcon'
import { cn } from '@/utils/classMerge'
import React, { ComponentPropsWithoutRef } from 'react'
type TContactInfoProps  = ComponentPropsWithoutRef<'ul'> & {
    links:TLinkWithIconProps[]
    contactInfoAppend?:React.ReactNode;

}
export const ContactInfo = ({ links,contactInfoAppend,className,...rest }:TContactInfoProps) => {
  return (
    <ul className={cn("flex-wrap flex-col sm:flex-row flex gap-2 sm:gap-4",className)} {...rest}>
      {links.map(link => (
        <li key={link.children.toString()}>
          <LinkWithIcon {...link} />
        </li>
      ))}
      {Boolean(contactInfoAppend) && contactInfoAppend}
    </ul>
  )
}
