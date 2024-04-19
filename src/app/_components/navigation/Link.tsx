'use client'
import React, { ComponentPropsWithRef } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type TLinkProps = ComponentPropsWithRef<'a'> & {
  activeClassName?: string
  applyLinkStyles?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, TLinkProps>(
  (
    {
      children,
      href = '',
      className,
      activeClassName = 'active !text-primary',
      applyLinkStyles = true,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const pathname = usePathname()
    const classes = twMerge(
      'text-base 3xl:text-lg  font-medium hover:text-primary active:text-primary font-medium',
      pathname === href.toString() || pathname === href.toString() ? activeClassName : '',
      applyLinkStyles ? 'link' : '',
      className,
    )

    let normalAnchorTag = (
      <a
        onClick={onClick}
        target="_blank"
        href={href.toString()}
        rel="noreferrer"
        className={classes}
        ref={ref}
      >
        {children}
      </a>
    )

    let link = (
      <NextLink
        ref={ref}
        className={classes}
        onClick={onClick}
        href={href}
        {...rest}
        passHref={true}
      >
        {children}
      </NextLink>
    )

    if (
      typeof href === 'string' &&
      (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel'))
    ) {
      link = normalAnchorTag
    }

    return link
  },
)

export { Link, type TLinkProps }
