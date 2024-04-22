import { type Header as THeader } from '@/payload/payload-types'
import { Link } from './Link'
import { cn } from '@/utils/classMerge'
import { ComponentPropsWithoutRef } from 'react'

type TNavItemProps = ComponentPropsWithoutRef<'ul'> & {
  navItems: THeader['navItems']
  linkClassName?:string
}

export const NavItems = ({ navItems,className,linkClassName }: TNavItemProps) => {
  return (
    <ul className={cn("flex items-center gap-2",className)}>
      {navItems?.map(({ link }) => {
        const { type, reference, url, label } = link
        const href =
          type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
            ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
                reference.value.slug
              }`
            : url
        return (
          <li key={url}>
            <Link
              href={href}
              className={cn('py-4 block px-3 xl:px-4 rounded-md transition-colors',linkClassName)}
            >
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
