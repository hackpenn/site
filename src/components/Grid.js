import styled from 'styled-components'
import { Box, theme } from '@hackclub/design-system'

const Grid = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  width: 100%;
  > div,
  > a,
  > img {
    width: 100%;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.125);
    border-radius: ${theme.radii[2]};
    max-width: 100%;
    min-height: 16rem;
  }
  > a {
    background-color: ${theme.colors.white};
  }
  > div,
  > a {
    padding: ${theme.space[3]}px;
  }
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.space[4]}px;
    > div,
    > a {
      padding: ${theme.space[4]}px;
    }
  }
`

export default Grid
