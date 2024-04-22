import { Topbar } from '../payload-types'

export const topBar: Omit<Topbar, 'id' | 'createdAt' | 'updatedAt'> = {
  location: {
    type: 'custom',
    url: 'https://maps.app.goo.gl/WidsT7Y9AVYmvNtN8',
    label: 'Zagrebačka cesta 45, Goričica',
  },

  email: {
    type: 'custom',
    url: 'mailto:pekarna.mario@gmail.com',
    label: 'pekarna.mario@gmail.com',
  },

  phone: {
    type: 'custom',
    url: 'tel:+385992144802',
    label: '+385 99 2144 802',
  },

  timmings: {
    sunday: {
      closed: true,
    },

    monday: {
      closed: true,
    },

    tuesday: {
      closed: true,
    },

    wednesday: {
      closed: true,
    },

    thursday: {
      closed: true,
    },

    friday: {
      closed: true,
    },

    saturday: {
      closed: true,
    },
  },
}
