import { Media } from '../payload-types'

export const imageProductsPage: Omit<Media, 'id' | 'createdAt' | 'updatedAt' | 'url' | 'filesize' | 'width' | 'height'> = {
  alt: 'Proizvodi',
  prefix: 'web-media',
  filename: 'image-products.jpg',
  mimeType: 'image/jpg',
}
