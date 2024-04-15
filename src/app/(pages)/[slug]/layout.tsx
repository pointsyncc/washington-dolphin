import React from 'react'

const layout = async ({
  children,
  params: { slug = 'home' },
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  if (slug && slug === 'home') {
    return <div>{children}</div>
  }
  return (
    <div className="">
      {children}
    </div>
  )
}
export default layout

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
}
