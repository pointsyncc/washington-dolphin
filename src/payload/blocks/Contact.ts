import type { Block } from 'payload/types'

export const Contact: Block = {
  slug: 'contact',
  labels: {
    singular: 'Contact',
    plural: 'Contact',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: {
        en: 'Heading',
        hr: 'Heading',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Description',
        hr: 'Description',
      },
      required: true,
    },
    {
      name: 'contactForm',
      type: 'relationship',
      relationTo: 'forms',
      label: {
        en: 'Contact Form',
        hr: 'Contact Form',
      },
      required: true,
    },
  ],
}
