import { Box } from 'theme-ui'
import Icon from '@hackclub/icons'

export default ({ sx, ...props }) => (
  <Box as={Icon} {...props} sx={{ lineHeight: 0, ...sx }} />
)
