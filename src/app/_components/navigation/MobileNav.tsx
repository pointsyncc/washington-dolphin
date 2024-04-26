"use client"
import React, { useState } from 'react'
import { Sidebar, SidebarContent, SidebarTrigger } from '../surfaces/Sidebar'
import { FaBars } from 'react-icons/fa6'
import { type Header as THeader } from '@/payload/payload-types'
import { NavItems } from './NavItems'
export const MobileNav = ({
  children,
  navItems,
}: {
  children: React.ReactNode
  navItems: THeader['navItems']
}) => {
  const [open,setOpen] = useState(false)
  return (
    <Sidebar open={open} onOpenChange={setOpen}>
      <SidebarTrigger className="text-[#573400] bg-[#cda56a] mx-[22px] block lg:hidden  p-2 rounded-xs">
        <FaBars size=".9rem" />
      </SidebarTrigger>
      <SidebarContent side="left" className="flex flex-col">
        <NavItems onNavItemClick={setOpen.bind(null,false)} navItems={navItems} className="flex-col gap-0 mt-12" />
        {children}
      </SidebarContent>
    </Sidebar>
  )
}
