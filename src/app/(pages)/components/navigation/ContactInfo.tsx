import { LinkWithIcon, TLinkWithIconProps } from '@/components/navigation/LinkWithIcon'
import { cn } from '@/utils/classMerge'
import React, { ComponentPropsWithoutRef } from 'react'
type TContactInfoProps = ComponentPropsWithoutRef<'ul'> & {
  links: (TLinkWithIconProps & { containerClassName?: string })[]
  contactInfoAppend?: React.ReactNode
}
export const ContactInfo = ({
  links,
  contactInfoAppend,
  className,
  ...rest
}: TContactInfoProps) => {
  return (
    <ul
      className={cn(
        'flex-wrap flex-col items-start sm:flex-row sm:items-start flex  gap-4',
        className,
      )}
      {...rest}
    >
      {links.map(link => (
        <li key={link.children.toString()} className={link.containerClassName}>
          <LinkWithIcon {...link} />
        </li>
      ))}
      {Boolean(contactInfoAppend) && contactInfoAppend}
    </ul>
  )
}
