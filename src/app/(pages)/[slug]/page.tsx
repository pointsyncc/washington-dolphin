import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'


import { PageClient } from './page_client'
import { Page as PageType } from '@/payload/payload-types'
import { staticHome } from '@/payload/seed/home-static'
import { generateMeta } from 'src/app/_utilities/generateMeta'
import { fetchGlobals } from 'src/app/_api/fetchGlobals'

export const dynamic = 'force-dynamic'

async function fetchPage(slug: string) {
  const { isEnabled: isDraftMode } = draftMode()
  let page: PageType | null = null

  try {
    const pagesQuery: { docs: PageType[] } = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?limit=100&draft=${isDraftMode}`,
      { next: { tags: [`pages_${slug}`] } },
    ).then(res => res.json())
    page = pagesQuery.docs.find(doc => doc.slug === slug)
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    console.error(error)
  }

  return page
}

async function fetchPages() {
  const { isEnabled: isDraftMode } = draftMode()
  let pages: PageType[] | null = null

  try {
    const res: { docs: PageType[] } = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?limit=100&draft=${isDraftMode}`,
    ).then(res => res.json())
    pages = res.docs
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    console.error(error)
  }

  return pages
}

export default async function Page({ params: { slug = 'home' } }) {
  //console.log('Page', slug)
  //let page = await fetchPage(slug)
  let page = await fetchPage(slug)

  const {header} = await fetchGlobals()

  // if no `home` page exists, render a static one using dummy content
  // you should delete this code once you have a home page in the CMS
  // this is really only useful for those who are demoing this template
/*   if (!page) {
    page = staticHome
  } */
  if (!page) {
    console.error(`No page found for slug: ${slug}`)
    return notFound()
  }

  return <PageClient page={page} header={header}/>
}

export async function generateStaticParams() {
  try {
    const pages = await fetchPages()
    return pages.map(({ slug }) =>
      slug !== 'home'
        ? {
            slug,
          }
        : {},
    ) // eslint-disable-line function-paren-newline
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  let page = await fetchPage(slug)

  if (!page && slug === 'home') {
    page = staticHome
  }

  return generateMeta({ doc: page })
}
