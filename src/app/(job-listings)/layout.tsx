import React from 'react'

import { Footer } from '../_components/Footer'

import CookieBanner from '../(pages)/components/CookieConsent/CookieBanner'
import { TopBar } from '../(pages)/components/navigation/Topbar'
import { fetchGlobals } from '../_api/fetchGlobals'
import { Header } from '../_components/navigation/Header'
import { Providers } from '../_providers'


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { header, topbar } = await fetchGlobals()

  return (
      <main className=" relative overflow-x-hidden">
        <Providers>
          {/* <AdminBar /> */}
          <TopBar {...topbar} />
          <Header topbar={topbar} {...header} hasFeaturedImage={false} />
          <div className="pb-[3.125rem] lg:pb-[6.25rem] xl:pb-[9.375rem]">{children}</div>
          <Footer email={topbar.email} phone={topbar.phone} location={topbar.location} navLinks={header.navItems} />
          <CookieBanner />
        </Providers>
      </main>
  )
}

