import React, { Fragment } from 'react'

import { GalleryBock } from '../../_blocks/GalleryBlock'
import { toKebabCase } from '../../_utilities/toKebabCase'
import { BackgroundColor } from '../BackgroundColor/index'
import { VerticalPadding, VerticalPaddingOptions } from '../VerticalPadding/index'

import { Page } from '@/payload/payload-types'
import { ContentBlock } from '../../_blocks/Content'
import { ProductsBlock } from '../../_blocks/ProductsBlock'
import { History } from '../../_blocks/History'
import { HomeProducts } from '../../_blocks/HomeProducts'
import { HomeContact } from 'src/app/_blocks/HomeContact'
import { HomeHero } from 'src/app/_blocks/HomeHero'
import { Contact } from 'src/app/_blocks/Contact'
import { JobListingsBlock } from '../../_blocks/JobListingsBlock'

const blockComponents = {
  galleryBlock: GalleryBock,
  productsBlock: ProductsBlock,
  content: ContentBlock,
  history: History,
  homeProducts: HomeProducts,
  homeContact: HomeContact,
  homeHero: HomeHero,
  contact:Contact,
  jobListingsBlock: JobListingsBlock
}

export const Blocks: React.FC<{
  blocks: Page['layout'][0][]
  disableTopPadding?: boolean
}> = props => {
  const { disableTopPadding, blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            // the cta block is containerized, so we don't consider it to be inverted at the block-level
            /* const blockIsInverted =
              'invertBackground' in block && blockType !== 'cta' ? block.invertBackground : false */
            const prevBlock = blocks[index - 1]

            const prevBlockInverted =
              prevBlock && 'invertBackground' in prevBlock && prevBlock?.invertBackground

            /*  const isPrevSame = Boolean(blockIsInverted) === Boolean(prevBlockInverted) */

            let paddingTop: VerticalPaddingOptions = 'large'
            let paddingBottom: VerticalPaddingOptions = 'large'

            /*     if (prevBlock && isPrevSame) {
              paddingTop = 'none'
            } */

            if (index === blocks.length - 1) {
              paddingBottom = 'large'
            }

            if (disableTopPadding && index === 0) {
              paddingTop = 'none'
            }

            if (Block) {
              return (
                <BackgroundColor key={index} invert={false}>
                  <VerticalPadding top={paddingTop} bottom={paddingBottom}>
                    <Block id={toKebabCase(blockName)} {...block} />
                  </VerticalPadding>
                </BackgroundColor>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
