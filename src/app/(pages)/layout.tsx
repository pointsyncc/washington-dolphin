import React from 'react'

import { Footer } from '../_components/Footer'

import CookieBanner from './components/CookieConsent/CookieBanner'
import { TopBar } from './components/navigation/Topbar'
import { fetchGlobals } from '../_api/fetchGlobals'
import { Header } from '../_components/navigation/Header'
import { Providers } from '../_providers'

export default async function RootLayout({
  children,
  params: { slug },
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const { header, topbar } = await fetchGlobals()

  return (
    <main className=" relative overflow-x-hidden">
      <Providers>
        {/* <AdminBar /> */}
        <TopBar {...topbar} />
        <Header topbar={topbar} {...header} slug={slug} />
        <div className="pb-[3.125rem] lg:pb-[6.25rem] xl:pb-[9.375rem]">{children}</div>
        <Footer
          email={topbar.email}
          phone={topbar.phone}
          location={topbar.location}
          navLinks={header.navItems}
        />
        <CookieBanner />
      </Providers>
    </main>
  )
}
