const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/_pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/_components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: false,
    extend: {
      screens: {
        // '3xl': '1800px',
        // xxl: '1536px',
      },
      zIndex: {
        '-999': '-999',
      },
      inset: {
        '-9999': '-9999px',
      },
      colors: {
        'blue-gray': {
          DEFAULT: 'hsl(var(--blue-gray))',
          foreground: 'hsl(var(--blue-gray-foreground))',
        },
        success: 'hsl(var(--success))',
        gray: 'hsl(var(--gray))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          foreground: 'hsl(var(--tertiary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'alt-background': 'hsla(var(--alt-background))',
        'light-green': {
          DEFAULT: 'hsl(var(--light-green))',
          foreground: 'hsl(var(--light-green-foreground))',
          border: 'hsl(var(--light-green-border))',
        },
        'light-pink': {
          DEFAULT: 'hsl(var(--light-pink))',
          foreground: 'hsl(var(--light-pink-foreground))',
          border: 'hsl(var(--light-pink-border))',
        },
        'light-yellow': {
          DEFAULT: 'hsl(var(--light-yellow))',
          foreground: 'hsl(var(--light-yellow-foreground))',
          border: 'hsl(var(--light-yellow-border))',
        },
        'light-blue': {
          DEFAULT: 'hsl(var(--light-blue))',
          foreground: 'hsl(var(--light-blue-foreground))',
          border: 'hsl(var(--light-blue-border))',
        },
        'light-orange': {
          DEFAULT: 'hsl(var(--light-orange))',
          foreground: 'hsl(var(--light-orange-foreground))',
          border: 'hsl(var(--light-orange-border))',
        },
        'light-purple': {
          DEFAULT: 'hsl(var(--light-purple))',
          foreground: 'hsl(var(--light-purple-foreground))',
          border: 'hsl(var(--light-purple-border))',
        },
        'gray-2': {
          DEFAULT: 'rgba(var(--gray-2))',
        },
        crystal: {
          DEFAULT: 'rgba(var(--crystal))',
          foreground: 'hsl(var(--crystal-foreground))',
        },
        body: {
          DEFAULT: 'hsl(var(--body))',
          foreground: 'hsl(var(--body-foreground))',
        },
        'danger': {
          DEFAULT: 'hsl(var(--danger))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 6px)',
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 6px)`,
        sm: 'calc(var(--radius) - 10px)',
        xs: 'calc(var(--radius) - 18px)',
        xxs: '4px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      screens: {
        narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
        wide: { raw: '(min-aspect-ratio: 3 / 2)' },
        'taller-than-854': { raw: '(min-height: 854px)' },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          margin: 'auto',
          'padding-inline': theme('padding.4'),
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '924px',
          },
          '@screen xl': {
            maxWidth: '1180px',
          },
          '@screen 2xl': {
            maxWidth: '1400px',
          },
          // '@screen 3xl': {
          //   maxWidth: '1500px',
          // },
        },
      })
    },
  ],
}
