import type { Footer, Header, Settings, Topbar } from '../../payload/payload-types'
import { FOOTER_QUERY, HEADER_QUERY, SETTINGS_QUERY, TOPBAR_QUERY } from '../_graphql/globals'
import { GRAPHQL_API_URL } from './shared'

export async function fetchSettings(): Promise<Settings> {
  if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

  const settings = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: SETTINGS_QUERY,
    }),
  })
    ?.then(res => {
      if (!res.ok) throw new Error('Error fetching doc')
      return res.json()
    })
    ?.then(res => {
      if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching settings')
      return res.data?.Settings
    })

  return settings
}

export async function fetchHeader(): Promise<Header> {
  if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

  const header = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: HEADER_QUERY,
    }),
  })
    ?.then(res => {
      if (!res.ok) throw new Error('Error fetching doc')
      return res.json()
    })
    ?.then(res => {
      if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching header')
      return res.data?.Header
    })

  return header
}

export async function fetchFooter(): Promise<Footer> {
  if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

  const footer = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: FOOTER_QUERY,
    }),
  })
    .then(res => {
      if (!res.ok) throw new Error('Error fetching doc')
      return res.json()
    })
    ?.then(res => {
      if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching footer')
      return res.data?.Footer
    })

  return footer
}

export async function fetchTopbar(): Promise<Topbar> {
  if (!GRAPHQL_API_URL) throw new Error('NEXT_PUBLIC_SERVER_URL not found')

  const topbar = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: TOPBAR_QUERY(),
    }),
  })
    ?.then(async res => {
      if (!res.ok) throw new Error('Error fetching doc')
      const data = await res.json()

      return data
    })
    ?.then(res => {
      if (res?.errors) throw new Error(res?.errors[0]?.message || 'Error fetching header')
      return res.data?.Topbar
    })

  return topbar
}

export const fetchGlobals = async (): Promise<{
  settings: Settings
  header: Header
  footer: Footer
  topbar: Topbar
}> => {
  // initiate requests in parallel, then wait for them to resolve
  // this will eagerly start to the fetch requests at the same time
  // see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const settingsData = fetchSettings()
  const headerData = fetchHeader()
  const footerData = fetchFooter()
  const topbarData = fetchTopbar()

  const [settings, header, footer, topbar]: [Settings, Header, Footer, Topbar] =
    await Promise.all([
      await settingsData,
      await headerData,
      await footerData,
      await topbarData,
    ])

  return {
    settings,
    header,
    footer,
    topbar,
  }
}
