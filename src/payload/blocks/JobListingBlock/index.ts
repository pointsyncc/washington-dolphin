import type { Block } from 'payload/types'

export const JobListingsBlock: Block = {
  slug: 'jobListingsBlock',
  labels: {
    singular: {
      en: 'JobListingsBlock',
      hr: 'Blok za oglase za posao',
    },
    plural: {
      en: 'JobListingsBlocks',
      hr: 'Blokovi za oglase za posao',
    },
  },
  fields: [
    {
        name: 'jobListings',
        label: {
          en: 'Job Listings',
          hr: 'Oglasi za posao',
        },
        type: 'relationship',
        relationTo: 'job-listings',
        hasMany: true,
    },
    {
      name: 'notificationEmails',
      label: {
          en: 'Notification Emails',
          hr: 'Obrazac za notifikacije',
      },
      type: 'relationship',
      relationTo: 'forms',
      required: true,
  }
  ],
}
