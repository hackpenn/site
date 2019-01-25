import styled from 'styled-components'
import { Box } from '@hackclub/design-system'

const Photo = styled(Box.withComponent('img'))`
  overflow: hidden;
  object-fit: cover;
`

export default Photo
