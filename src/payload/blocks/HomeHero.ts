import type { Block } from 'payload/types'

export const HomeHero: Block = {
  slug: 'homeHero',
  labels: {
    singular: 'Home hero',
    plural: 'Home heros',
  },
  fields: [
    {
      name: 'background',
      type: 'upload',
      relationTo: 'media',
      required: true,

    },
  ],
}
