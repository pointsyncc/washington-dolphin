import { LINK_FIELDS } from './link'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
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
    projectsPage {
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
