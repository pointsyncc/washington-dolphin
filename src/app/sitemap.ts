import { MetadataRoute } from 'next'
import { fetchDocs } from './_api/fetchDocs'
import { Page } from '@/payload/payload-types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL
  let pages: Page[] | []
  let sitemap: MetadataRoute.Sitemap | []
  pages = await fetchDocs('pages', false)
  if (!pages) {
    return []
  }
  sitemap = pages.map(page => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  return sitemap
}
