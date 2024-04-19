import React from 'react'
import { Metadata } from 'next'

import { AdminBar } from './_components/AdminBar'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import { Providers } from './_providers'
import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import './_css/app.css'
import { fetchGlobals } from './_api/fetchGlobals'
import Link from 'next/link'
import { TopBar } from './(pages)/components/navigation/Topbar'
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500'],
})
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['400', '500'],
})
export default async function RootLayout({ children }: { children: React.ReactNode }) {
 

  // const open_sans = Open_Sans({
  //   subsets: ['latin'],
  //   variable: '--font-open-sans',
  //   display: 'swap',
  // })
  const {header,topbar} = await fetchGlobals()
  // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/workSundays`)
  // const data = await res.json()
  console.log(topbar)

  return (
    <html
      lang="hr"
      suppressHydrationWarning
      className={`${poppins.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="px-[22px] relative overflow-x-hidden">
        <Providers>
          {/* <AdminBar /> */}
          <TopBar {...topbar}/>
          {/* <Header workingSundays={data.sunday} header={header} /> */}
          <div className='pb-[50px] lg:pb-[150px] xl:pb-[200px]'>
          {children}
          </div>

          <Footer email={topbar.email} phone={topbar.phone} location={topbar.location} />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}
