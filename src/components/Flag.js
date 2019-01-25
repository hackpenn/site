import styled from 'styled-components'
import theme from 'theme/config'
import { Link } from 'gatsby'

const Flag = styled(Link).attrs({
  to: '/',
  'aria-label': 'Homepage'
})`
  background: url(/flag--light.svg) no-repeat;
  background-size: auto 100%;
  border-radius: ${theme.pill};
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  ${theme.mediaQueries.md} {
    width: 72px;
    height: 72px;
  }
`

export default Flag
