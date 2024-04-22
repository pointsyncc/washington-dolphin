import { LinkWithIcon } from '@/components/navigation/LinkWithIcon'
import { Button } from '../_components/Button'
import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'
import { MdArrowOutward } from 'react-icons/md'

export default function NotFound() {
  return (
    <Gutter>
      <VerticalPadding top="none" bottom="large">
        <main className="h-dvh grid justify-center items-center">
          <div className="flex justify-center flex-col gap-2 items-center">
            <h1 className="text-6xl md:text-8xl font-bold">404</h1>
            <p className="text-center text-sm md:text-lg my-3">
              Nažalost, stranica koju tražite ne postoji ili je uklonjena.
            </p>
            <LinkWithIcon
              iconClassName="text-body-foreground"
              className="flex items-center justify-end hover:text-body-foreground hover:underline"
              href={'/'}
              icon={MdArrowOutward}
              iconPosition="append"
            >
              Povratak na početnu
            </LinkWithIcon>
          </div>
        </main>
      </VerticalPadding>
    </Gutter>
  )
}
