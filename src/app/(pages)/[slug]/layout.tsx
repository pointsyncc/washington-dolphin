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
    <main>
      {children}
    </main>
  )
}
export default layout

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
}

export const metadata = {
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}