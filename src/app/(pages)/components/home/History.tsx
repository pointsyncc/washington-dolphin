import { Image } from '@/components/Media/Image'
import { Container } from '@/components/grid/Container'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import React from 'react'

export const History = () => {
  return (
    <Section variant='dark'>
      <div className="flex">
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
          <Image
            containerClassName="max-w-[21.375rem]"
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
        </div>
      </div>
    </Section>
  )
}
