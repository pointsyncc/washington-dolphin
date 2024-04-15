'use client'

import React from 'react'
import Link from 'next/link'

import type { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav
      className={"flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-start justify-center sm:justify-start " + classes.nav}
    >
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
    </nav>
  )
}
