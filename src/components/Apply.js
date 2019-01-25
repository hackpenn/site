import React from 'react'
import styled from 'styled-components'
import { Box, Section, Container, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Action from 'components/Action'

const Art = styled(Box)`
  width: 128px;
  height: 128px;
  background-image: url(/art/${props => props.src}.svg);
  background-size: 100% 100%;
  position: absolute;
  z-index: 0;
  ${theme.mediaQueries.md} {
    width: 192px;
    height: 192px;
  }
  &:nth-child(1) {
    left: 10%;
  }
  &:nth-child(2) {
    right: 8%;
    bottom: -8%;
  }
`

const Apply = props => (
  <Section
    bg={theme.colors.primaryDark}
    style={{ position: 'relative', overflow: 'hidden' }}
    {...props}
  >
    <Art src="tree--sm" style={{ left: '10%' }} />
    <Art src="wind" style={{ right: '8%' }} />
    <Container maxWidth={36} px={3} py={4} style={{ zIndex: 1 }}>
      <Heading.h2 fontSize={[5, 6]}>Register now.</Heading.h2>
      <Text fontSize={[3, 4]} my={3}>
        We can’t wait to see what you’ll make.
      </Text>
      <Action
        mt={3}
        to="/register"
        bg={theme.colors.primary}
        scale
        inverted
        chevronRight
      >
        Register
      </Action>
    </Container>
  </Section>
)

export default Apply
