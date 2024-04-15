import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const WorkSundays: GlobalConfig = {
  slug: 'workSundays',
  label: {
    en: 'Work Sundays',
    hr: 'Rad nedjeljom',
  },
  access: {
    read: () => true,
  },
  fields: [
    //add calendar field
    {
      name: 'sunday',
      label: {
        en: 'Nedjelja',
        hr: 'Nedjelja',
      },
      type: 'array',
      fields: [
        {
          name: 'date',
          label: {
            en: 'Date',
            hr: 'Datum',
          },
          admin: {
            date: {
                displayFormat: 'dd.MM.yyyy',
            }
          },
          type: 'date',
          required: true,
        },
        {
            name: 'open',
            label: {
              en: 'Open',
              hr: 'Otvoreno',
            },
            type: 'checkbox',
            required: true,
        },
        {
            name: 'from',
            label: {
              en: 'From',
              hr: 'Od',
            },
            type: 'text',
            required: false,
        },
        {
            name: 'to',
            label: {
              en: 'To',
              hr: 'Do',
            },
            type: 'text',
            required: false,
        },
        {
          name: 'description',
          label: {
            en: 'Napomena',
            hr: 'Napomena',
          },
          type: 'textarea',
          required: false,
        },
      ],
    },
  ],
}
