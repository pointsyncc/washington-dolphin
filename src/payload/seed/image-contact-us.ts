import { Media } from '../payload-types'

export const imageContactUsPage: Omit<Media, 'id' | 'createdAt' | 'updatedAt' | 'url' | 'filesize' | 'width' | 'height'> = {
  alt: 'Contact us',
  prefix: 'web-media',
  filename: 'image-contact-us.jpg',
  mimeType: 'image/jpg',
}
