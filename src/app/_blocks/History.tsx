import { Image } from '@/components/Media/Image'
import serialize from '@/components/RichText/serialize'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { Media, Page } from '@/payload/payload-types'
import { cn } from '@/utils/classMerge'
import React from 'react'
type THistoryProps = Extract<Page['layout'][0], { blockType: 'history' }>
export const History = ({columns}: THistoryProps) => {
  return (
    <Section variant="dark" id='o-nama'>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0">
        {columns?.map((column, i) => {
          const colClassName = cn(
            `flex-1 space-y-5 flex basis-1/2`,
            (i + 1) % 2 === 0 ? 'flex-col-reverse space-y-reverse' : ' flex-col-reverse lg:flex-col',
          )
          const imgContainerClassName = column.imageSize === 'small' ? 'lg:max-w-[21.375rem]' : ''
          const image = column?.image as Media
          return (
            <div className={colClassName} key={column.id}>
              <div className="space-y-5">
                {Boolean(column.heading) && <Heading level={2}>{column.heading}</Heading>}
                <div className="w-[35.8125rem] max-w-full">
                  {serialize(column.description as any)}
                </div>
                {/* <Text level={1} className="w-4/5">
                  Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti
                  pitanje u vezi s nekim našim proizvodom ili proizvodnim procesom?
                </Text> */}
              </div>
              <Image
                containerClassName={imgContainerClassName}
                className="grayscale"
                src={image?.url}
                alt={image?.alt}
              />
            </div>
          )
        })}
        {/* <div className="space-y-5 flex flex-col-reverse lg:flex-col">
          <div className="space-y-5">
          <Heading level={2}>Bogata povijest i obiteljska tradicija</Heading>
          <Text level={1} className="w-4/5">
            Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u
            vezi s nekim našim proizvodom ili proizvodnim procesom? Želite nam se obratiti radi
            ostvarenja ili unaprijeđenja poslovne suradnje? Nemojte čekati, slobodno nas
            kontaktirajte!
          </Text>
          <Text level={1} className="w-4/5">
            Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u
            vezi s nekim našim proizvodom ili proizvodnim procesom?
          </Text>
          </div>
          <Image
            containerClassName="lg:max-w-[21.375rem] !mb-6 lg:mb-0"
            className="grayscale"
            src="/history-1.jpg"
            alt="history-1"
          />
        </div>
        <div className="space-y-5">
          <Image src="/history-2.jpg" alt="history-2" className="grayscale" />
          <Text level={1} className="w-4/5">
            Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u
            vezi s nekim našim proizvodom ili proizvodnim procesom? Želite nam se obratiti radi
            ostvarenja ili unaprijeđenja poslovne suradnje? Nemojte čekati, slobodno nas
            kontaktirajte!
          </Text>
        </div> */}
      </div>
    </Section>
  )
}
