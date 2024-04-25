import { revalidate } from '../../utilities/revalidate'
import type { AfterChangeHook } from 'payload/dist/collections/config/types'

// Revalidate the page in the background, so the user doesn't have to wait
// Notice that the hook itself is not async and we are not awaiting `revalidate`
// Only revalidate existing docs that are published
// Don't scope to `operation` in order to purge static demo pages
export const revalidateJob: AfterChangeHook = ({ doc, req: { payload } }) => {
  console.log('revalidateJob hook is triggered')
  revalidate({ payload, collection: 'job-listings', slug: doc.id })

  return doc
}
