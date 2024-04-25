import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Pekarna Mario',
  title: 'Pekarna Mario',
  description: 'Najbolja pekara u Zelini!',
  images: [
    {
      url: 'https://pekarnamario.hr/media/og_image.webp',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
