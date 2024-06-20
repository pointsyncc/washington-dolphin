import { JobListing } from '@/payload/payload-types'
import { Metadata } from 'next'
import { fetchDoc } from 'src/app/_api/fetchDoc'
import { mergeOpenGraph } from 'src/app/_utilities/mergeOpenGraph'
import NotFound from '../../../(pages)/not-found'
import PageClient from './page_client'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { id } }) {
  let job: JobListing | null = null

  try {
    job = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/job-listings/${id}`, {
      next: { tags: [`job-listings_${id}`] },
    }).then(res => res.json())
  } catch (error) {
    console.error(error)
  }
  if (!job) return NotFound()

  return <PageClient job={job} />
}

export async function generateMetadata({ params: { id } }): Promise<Metadata> {
  let job: JobListing | null = null
  try {
    job = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/job-listings/${id}`, {
      next: { tags: [`job-listings_${id}`] },
    }).then(res => res.json())
  } catch (error) {
    console.error(error)
  }

  /*   if (!page && slug === 'home') {
    page = staticHome
  } */

  const ogImage =
    typeof job?.meta?.image === 'object' &&
    job?.meta?.image !== null &&
    'url' in job?.meta?.image &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}${job.meta.image.url}`

  return {
    title: job.title + ' - Oglasi za posao' || 'Pekarna Mario',
    description: job.shortDescription,
    openGraph: mergeOpenGraph({
      title: job.title || 'Pekarna Mario',
      description: job.shortDescription,
      url: Array.isArray(job.id) ? job.id.join('/') : '/',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  }
}
