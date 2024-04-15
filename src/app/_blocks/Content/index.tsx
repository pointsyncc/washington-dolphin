import React from 'react'

import type { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { richText } = props

  return (
    <Gutter className={classes.content}>
      <div className={classes.grid}>
        <RichText content={richText} />
      </div>
    </Gutter>
  )
}
