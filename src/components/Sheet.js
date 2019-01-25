import styled, { css } from 'styled-components'
import { Card, Container } from '@hackclub/design-system'
import { theme } from 'theme'
import PropTypes from 'prop-types'

const Sheet = styled(Card.withComponent(Container))`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.radii[2]};
  ${props =>
    !props.flat &&
    css`
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.0625);
    `};
`
Sheet.defaultProps = {
  bg: 'rgba(255, 255, 255, 0.875)',
  p: [3, 4],
  color: theme.colors.black,
  width: 1
}
Sheet.propTypes = {
  flat: PropTypes.boolean
}

export default Sheet
