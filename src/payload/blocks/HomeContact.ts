import type { Block } from 'payload/types'

export const HomeContact: Block = {
  slug: 'homeContact',
  labels: {
    singular: 'Home Contact',
    plural: 'Home Contact',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: {
        en: 'Heading',
        hr: 'Heading',
      },
      required: true,
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
      name: 'background',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Background Image',
        hr: 'Background slika',
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
