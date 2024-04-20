'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import { Header } from '@/components/Header'
import { Header as HeaderType, Page } from '@/payload/payload-types'
import HeroSection from 'src/app/components/common/hero-section'
import { Blocks } from '@/components/Blocks'

// Fetch the page in a server component, pass it to the client component, then thread it through the hook
// The hook will take over from there and keep the preview in sync with the changes you make
// The `data` property will contain the live data of the document
export const PageClient: React.FC<{
  page: Page
  header: HeaderType
  workingSundays: any
}> = ({ page: initialPage, workingSundays, header }) => {
  const { data } = useLivePreview<Page>({
    initialData: initialPage,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
    depth: 1,
  })

  const bgURL = typeof data.featuredImage === 'string' ? data.featuredImage : data.featuredImage?.url

  return (
    <React.Fragment>
     {/* <Header showWorkingSundays={data.showWorkingSundays} workingSundays={workingSundays.sunday} header={header} /> */}
     <HeroSection pageTitle={data.title} bgURL={bgURL} />
     {/* <Hero {...data.hero} /> */}
      <Blocks
        blocks={data.layout}
        disableTopPadding={
          !data.hero || data.hero?.type === 'none' || data.hero?.type === 'lowImpact'
        }
      /> 
    </React.Fragment>
  )
}
