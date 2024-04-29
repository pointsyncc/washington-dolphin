import type { CollectionConfig } from 'payload/types'
import { revalidateJob } from './revalidateJob'
import stringSimilarity from 'string-similarity-js'

const JobListings: CollectionConfig = {
  slug: 'job-listings',
  labels: {
    singular: {
      en: 'Job listing',
      hr: 'Oglas za posao',
    },
    plural: {
      en: 'Job listings',
      hr: 'Oglasi za posao',
    },
    },
  admin: {
    useAsTitle: 'title',
    preview: doc => {
        return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
          `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/oglasi-za-posao/${doc.id}/${doc.title}`,
        )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
      },
  },
  endpoints: [
    {
      path: '/search',
      method: 'get',
      handler: async (req, res, next) => {
        const { title } = req.query
        const searchTitle = title as string
        const jobs = await req.payload.find({
          collection: 'job-listings',
          where: {
            title: { like: searchTitle.toLowerCase() },
          },
        })
        //console.log(jobs)
        const searchResults = jobs.docs.filter(product => {
          return (
            stringSimilarity(searchTitle, product.title) > 0.4 ||
            product.title.toLowerCase().startsWith(searchTitle.toLowerCase())
          )
        })
        return res.send(searchResults)
        //return res.send(jobs)
      },
    },
  ],
  hooks: {
    afterChange: [revalidateJob],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        hr: 'Naslov',
      },
      required: true,
      admin: {
        placeholder: {
          en: 'Enter the job title here',
          hr: 'Ovdje unesite naslov oglasa',
        }
      },
      type: 'text',
    },
    {
      name: 'shortDescription',
      label: {
        en: 'Short description',
        hr: 'Kratki opis',
      },
      required: true,
      type: 'text',
    },
    {
      name: 'description',
      label: {
        en: 'Description',
        hr: 'Opis',
      },
      required: true,
      type: 'richText',
    },
    {
      name: 'location',
      label: {
        en: 'Location',
        hr: 'Lokacija',
      },
      required: true,
      admin: {
        placeholder: {
          en: 'Enter the job location here',
          hr: 'Ovdje unesite lokaciju oglasa',
        }
      },
      type: 'text',
    },
    {
        name: 'deadline',
        label: {
          en: 'Deadline',
          hr: 'Rok prijave',
        },
        required: false,
        type: 'date',
        admin: {
            position: 'sidebar',
            date:{
                displayFormat: 'dd.MM.yyyy',
            }
        }
    },
    {
        name: 'salary',
        label: {
          en: 'Salary',
          hr: 'Plaća',
        },
        required: false,
        type: 'number',
        admin: {
            position: 'sidebar',
        }
    },
    {
        name: 'form',
        label: {
            en: 'Form',
            hr: 'Obrazac',
        },
        type: 'relationship',
        relationTo: 'forms',
        required: false,
    },
  ],
}

export default JobListings
