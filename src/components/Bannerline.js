import React from 'react'
import { Box } from '@hackclub/design-system'
import { theme } from 'theme'

const Bannerline = props => (
  <Box
    bg={theme.colors.accent}
    mt={[4, 5, 6]}
    mb={4}
    style={{ height: 4, width: '8rem' }}
    {...props}
  />
)

export default Bannerline
