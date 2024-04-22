import { Media } from '../payload-types'

export const ogImage: Omit<Media, 'id' | 'createdAt' | 'updatedAt' | 'url' | 'filesize' | 'width' | 'height'> = {
  alt: 'Logo',
  prefix: 'web-media',
  filename: 'og_image.jpg',
  mimeType: 'image/jpg',
}
