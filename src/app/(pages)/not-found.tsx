import { LinkWithIcon } from '@/components/navigation/LinkWithIcon'
import { MdArrowOutward } from 'react-icons/md'
import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'
import CookieBanner from './components/CookieConsent/CookieBanner'

export default function NotFound() {
  return (
    <Gutter>
      <VerticalPadding top="none" bottom="large">
        <main className="h-dvh grid justify-center items-center">
          <div className="flex justify-center flex-col gap-2 items-center">
            <div className='border-4 rounded-md p-6 border-secondary'><h1 className="text-6xl md:text-8xl font-bold">404</h1></div>
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
        <CookieBanner />
      </VerticalPadding>
    </Gutter>
  )
}
