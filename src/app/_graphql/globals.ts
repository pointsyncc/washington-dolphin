import { LINK_FIELDS } from './link'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    logo {
      url
      alt
      width
      height
    }
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const SETTINGS = `
  Settings {
    postsPage {
      slug
    }
  }
`

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`

export const WORK_SUNDAY = `
WorkSunday {
  sunday {
    date
    open
    from
    to
    description
  }
}
`

export const WORKING_SUNDAYS_QUERY = `
query WorkSunday {
  ${WORK_SUNDAY}
}
`

const timmingFields = `{
    closed
    openningTime
    closingTime
  }`

export function TOPBAR(locale: string = 'hr') {
  return `
    Topbar {
      email ${LINK_FIELDS({ disableAppearance: true })}
      phone ${LINK_FIELDS({ disableAppearance: true })}
      location ${LINK_FIELDS({ disableAppearance: true })}
      timmings {
        sunday ${timmingFields}
        monday ${timmingFields}
        tuesday ${timmingFields}
        wednesday ${timmingFields}
        thursday ${timmingFields}
        friday ${timmingFields}
        saturday ${timmingFields}
      }
    }
  `
}

export function TOPBAR_QUERY(locale: string = 'hr') {
  return `
  query Topbar {
    ${TOPBAR(locale)}
  }
 `
}
