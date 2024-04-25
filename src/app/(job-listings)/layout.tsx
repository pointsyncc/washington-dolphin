import { Metadata } from 'next'
import React from 'react'

import { Footer } from '../_components/Footer'

import { Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import { fetchGlobals } from '../_api/fetchGlobals'
import { Header } from '../_components/navigation/Header'
import '../_css/app.css'
import { Providers } from '../_providers'
import { InitTheme } from '../_providers/Theme/InitTheme'
import { mergeOpenGraph } from '../_utilities/mergeOpenGraph'
import { TopBar } from '../(pages)/components/navigation/Topbar'
import CookieBanner from '../(pages)/components/CookieConsent/CookieBanner'

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
  const { header, topbar } = await fetchGlobals()

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
      <body className=" relative overflow-x-hidden">
        <Providers>
          {/* <AdminBar /> */}
          <TopBar {...topbar} />
          <Header topbar={topbar} {...header} hasFeaturedImage={false} />
          <div className="pb-[3.125rem] lg:pb-[6.25rem] xl:pb-[9.375rem]">{children}</div>
          <Footer email={topbar.email} phone={topbar.phone} location={topbar.location} navLinks={header.navItems} />
          <CookieBanner />
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