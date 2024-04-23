import React from 'react'

import type { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'


type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { richText } = props

  return (
    <Gutter>
      <div className='max-w-[1200px] m-auto px-4 mt-6'>
        <RichText content={richText} />
      </div>
    </Gutter>
  )
}
