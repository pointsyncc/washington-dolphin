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
    label: 'pekara.mario@gmail.com',
  },
  phone: {
    type: 'custom',
    url: 'tel:+385981391548',
    label: '+385 98 1391 548',
  },
  timmings: {
    monday: {
      closed: false,
      openningTime: '2024-04-23T04:00:00.750Z',
      closingTime: '2024-04-23T19:00:00.000Z',
    },
    tuesday: {
      closed: false,
      openningTime: '2024-04-23T04:00:00.000Z',
      closingTime: '2024-04-23T19:00:00.000Z',
    },
    wednesday: {
      closed: false,
      openningTime: '2024-04-23T04:00:00.000Z',
      closingTime: '2024-04-23T19:00:00.000Z',
    },
    thursday: {
      closed: false,
      openningTime: '2024-04-23T04:00:00.000Z',
      closingTime: '2024-04-23T19:00:00.000Z',
    },
    friday: {
      closed: false,
      openningTime: '2024-04-23T04:00:00.000Z',
      closingTime: '2024-04-23T19:00:00.000Z',
    },
    saturday: {
      closed: false,
      openningTime: '2024-04-23T04:00:00.000Z',
      closingTime: '2024-04-23T18:00:00.000Z',
    },
    sunday: {
      closed: true,
    },
  },
}
