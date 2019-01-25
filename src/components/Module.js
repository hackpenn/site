import React from 'react'
import styled, { css } from 'styled-components'
import { Box, Flex, Heading, Icon, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import PropTypes from 'prop-types'

const Base = styled(Flex).attrs({ flexDirection: ['row', 'column'] })`
  ${props =>
    props.lg &&
    css`
      svg {
        width: 64px;
        height: 64px;
      }
    `};
`

const Module = ({
  icon,
  name,
  body,
  lg,
  iconColor = theme.colors.accent,
  ...props
}) => (
  <Base lg={lg} {...props}>
    <Icon
      size={48}
      ml={lg ? -2 : -1}
      mr={[3, null, 0]}
      mb={1}
      glyph={icon}
      color={iconColor || 'inherit'}
      style={{ flexShrink: 0 }}
    />
    <Box>
      <Heading.h3 mb={1} fontSize={lg ? [4, 5] : 4} children={name} />
      {body && (
        <Text
          fontSize={3}
          className="sans"
          style={{ lineHeight: '1.375' }}
          children={body}
          mb={props.children && 2}
        />
      )}
      {props.children}
    </Box>
  </Base>
)

Module.displayName = 'Module'

Module.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string,
  lg: PropTypes.bool
}

export default Module
