import { Media } from '../payload-types'

export const imageLogo: Omit<Media, 'id' | 'createdAt' | 'updatedAt' | 'url' | 'filesize' | 'width' | 'height'> = {
  alt: 'Logo',
  prefix: 'web-media',
  filename: 'logo.webp',
  mimeType: 'image/webp',
}
