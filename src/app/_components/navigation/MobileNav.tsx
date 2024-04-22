
import React from 'react'
import { Sidebar, SidebarContent, SidebarTrigger } from '../surfaces/Sidebar'
import { FaBars } from 'react-icons/fa6'

export const MobileNav = ({children}:{children:React.ReactNode}) => {
  return (
    <Sidebar>
      <SidebarTrigger className="text-white  mx-[22px] block lg:hidden bg-primary p-3 rounded-xs">
      
          <FaBars size="1.75rem" />
  
      </SidebarTrigger>
      <SidebarContent side="left">{children}</SidebarContent>
    </Sidebar>
  )
}
