import base from '@hackclub/theme'
import { merge } from 'lodash'

const theme = base

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  primary: '#3fb34f',
  primaryWash: '#acffb8',
  primaryDark: '#1f5927',
  alt: '#ffa235',
  altWash: '#ffdc89',
  accent: '#ff5a5f',
  error: '#b23f42',
  success: '#5aff71',
  info: '#00bdde',
  infoWash: '#7cecff'
}

theme.colors = merge(theme.colors, {
  ...palette,
  text: palette.black,
  background: palette.snow,
  elevated: palette.white,
  muted: palette.grey,
  pos: '#f0fff4',
  neg: '#ffeef0',
  one: '#D4F5A9',
  two: '#84D46E',
  three: palette.primary,
  four: '#257A2F',
  modes: {
    dark: {
      text: palette.white,
      background: palette.dark,
      elevated: palette.darkless,
      pos: 'rgba(40,206,104,0.25)',
      neg: 'rgba(180,35,52,0.25)',
      one: '#2A2E24',
      two: '#2D4326',
      three: palette.primaryDark,
      four: '#2E7A37'
    }
  }
})

const fonts = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif`
theme.fonts.body = `"Inter", ${fonts}`
theme.fonts.heading = theme.fonts.body
theme.fonts.mono = `"iA Quattro", ${fonts}`

theme.fontWeights = {
  body: 'normal',
  bold: 'bold'
}

theme.styles.root = merge(theme.styles.root, {
  fontFeatureSettings: 'ss02',
  backgroundColor: 'background',
  color: 'text'
})

theme.styles.navitem = {
  color: 'primary',
  textDecoration: 'none',
  fontWeight: 'bold',
  ':hover,:focus': {
    color: 'primaryDark'
  }
}

export default theme
