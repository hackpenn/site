import { Flex } from 'rebass'
import Icon from '../components/icon'

export default ({ sx, ...props }) => (
  <Flex
    {...props}
    sx={{
      alignItems: 'center',
      justifyContent: ['flex-start', 'center'],
      bg: 'accent',
      color: 'white',
      borderRadius: 'default',
      lineHeight: 'heading',
      p: 2,
      mt: [3, 4],
      mx: 'auto',
      maxWidth: 512,
      ...sx
    }}
  >
    <Icon glyph="flag" size={32} sx={{ mr: [2, 3] }} />
    Site is currently under construction
  </Flex>
)
