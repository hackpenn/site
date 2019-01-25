import { theme } from '@hackclub/design-system'
import palx from 'palx'

export const grays = {
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff'
}

export const brand = {
  primary: '#3fb34f',
  primaryWash: '#acffb8',
  primaryDark: '#1f5927',
  alt: '#ffa235',
  altWash: '#ffdc89',
  accent: '#ff5a5f',
  error: '#b23f42',
  success: '#5aff71',
  info: '#00bdde',
  infoWash: '#7cecff',
  muted: grays.grey
}

// for DS input
brand.blue = [brand.altWash, brand.altWash, brand.altWash]

export const palette = palx(brand.alt)

export const colors = {
  ...palette,
  ...grays,
  ...brand
}

theme.colors = colors

const baseFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'

const mono = '"iA Quattro"'
const sans = '"Inter UI"'

theme.font = `${sans},${baseFamily}`
theme.mono = `${mono},${baseFamily}`

export default theme
