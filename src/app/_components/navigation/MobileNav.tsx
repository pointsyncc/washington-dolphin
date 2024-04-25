
import React from 'react'
import { Sidebar, SidebarContent, SidebarTrigger } from '../surfaces/Sidebar'
import { FaBars } from 'react-icons/fa6'

export const MobileNav = ({children}:{children:React.ReactNode}) => {
  return (
    <Sidebar>
      <SidebarTrigger className="text-[#573400] bg-[#cda56a] mx-[22px] block lg:hidden  p-2 rounded-xs">
      
          <FaBars size=".9rem" />
  
      </SidebarTrigger>
      <SidebarContent side="left">{children}</SidebarContent>
    </Sidebar>
  )
}
