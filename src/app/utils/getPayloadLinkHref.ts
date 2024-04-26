import { LinkType } from '@/payload/fields/link'
import { Header } from '@/payload/payload-types'
import { ArrayElement } from 'src/types/general'

export const getPayloadLinkHref = (props: any) => {
  return props?.type === 'reference' && typeof props?.reference?.value === 'object' && props?.reference.value.slug
    ? `${props?.reference?.relationTo !== 'pages' ? `/${props?.reference?.relationTo}` : ''}/${
        props?.reference.value.slug
      }`
    : props?.url
}
