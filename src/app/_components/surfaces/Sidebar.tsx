'use client'

import * as React from 'react'
import * as SidebarPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/classMerge'
import { FaTimes } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";
const Sidebar = SidebarPrimitive.Root

const SidebarTrigger = SidebarPrimitive.Trigger

const SidebarClose = SidebarPrimitive.Close

const SidebarPortal = SidebarPrimitive.Portal

const SidebarOverlay = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
))
SidebarOverlay.displayName = SidebarPrimitive.Overlay.displayName

const SidebarVariants = cva(
  'fixed z-50 gap-4 bg-body p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

interface SidebarContentProps
  extends React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Content>,
    VariantProps<typeof SidebarVariants> {}

const SidebarContent = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Content>,
  SidebarContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SidebarPortal>
    <SidebarOverlay />
    <SidebarPrimitive.Content ref={ref} className={cn(SidebarVariants({ side }), className)} {...props}>
      {children}
      <SidebarPrimitive.Close className="bg-[#573400] rounded-xs text-[#cda56a] p-2 absolute right-4 top-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <IoMdClose size=".9rem" />
        <span className="sr-only">Close</span>
      </SidebarPrimitive.Close>
    </SidebarPrimitive.Content>
  </SidebarPortal>
))
SidebarContent.displayName = SidebarPrimitive.Content.displayName

const SidebarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)
SidebarHeader.displayName = 'SidebarHeader'

const SidebarFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
)
SidebarFooter.displayName = 'SidebarFooter'

const SidebarTitle = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
))
SidebarTitle.displayName = SidebarPrimitive.Title.displayName

const SidebarDescription = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
SidebarDescription.displayName = SidebarPrimitive.Description.displayName

export {
  Sidebar,
  SidebarPortal,
  SidebarOverlay,
  SidebarTrigger,
  SidebarClose,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTitle,
  SidebarDescription,
}
