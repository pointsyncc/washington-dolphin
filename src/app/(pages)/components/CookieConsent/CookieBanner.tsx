'use client'
import React from 'react'
// eslint-disable-next-line import/no-named-as-default
import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'

export default function CookieBanner() {
  return (
    <CookieConsent
      debug={true}
      style={{
        background: '#cda56a',
        color: '#573400',
      }}
      acceptOnOverlayClick={true}
      overlay={true}
      overlayClasses="bg-[#e9e9e9] text-[#707070] text-[12.5px] px-4 py-2.5 flex items-center gap-2.5"
      buttonText="Prihvati kolačiće"
      buttonClasses="bg-primary text-white"
      buttonStyle={{
        borderRadius: '20px',
        padding: '0.65rem 1.15rem',
        backgroundColor: '#573400',
        color: '#cda56a',
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
      }}
      acceptOnScroll={true}
      acceptOnScrollPercentage={25}
    >
      Ova web stranica koristi kolačiće kako bi vam pružila najbolje korisničko iskustvo. Koristimo
      samo nužne kolačiće koji su potrebni za rad web stranice. Za više informacija, možete
      pogledati našu{' '}
      <Link
        href="/politika-privatnosti"
        className="underline font-semibold text-[#573400] text-[12px]"
      >
        politiku privatnosti
      </Link>{' '}
      i{' '}
      <Link
        href="/politika-kolacica"
        className="underline font-semibold text-[#573400] text-[12px]"
      >
        politiku kolačića
      </Link>
      .
    </CookieConsent>
  )
}
