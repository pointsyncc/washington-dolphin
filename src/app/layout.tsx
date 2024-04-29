import { Metadata } from 'next'
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import React from 'react'
import './_css/app.css'
import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

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
  return (
    <html
      lang="hr"
      suppressHydrationWarning
      className={`${poppins.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className=" relative overflow-x-hidden">{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://pekarnamario.hr'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}
