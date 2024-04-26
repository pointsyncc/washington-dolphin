import { MetadataRoute } from 'next'
import { fetchDocs } from './_api/fetchDocs'
import { JobListing, Page } from '@/payload/payload-types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL
  let pages: Page[] | []
  let jobListings: JobListing[] | []
  let sitemap1: MetadataRoute.Sitemap | []
  let sitemap2: MetadataRoute.Sitemap | []
  pages = await fetchDocs('pages', false)
  jobListings = await fetchDocs('job-listings', false)
  if (!pages) {
    return []
  }
  if (!jobListings) {
    return []
  }
  sitemap2 = jobListings.map(jobListing => ({
    url: `${BASE_URL}/oglasi-za-posao/${jobListing.id}`,
    lastModified: new Date(jobListing.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  sitemap1 = pages.map(page => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...sitemap1, ...sitemap2]
}
