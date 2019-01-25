import React from 'react'
import { Flex, Box, Heading, Icon, Link, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import { urls } from 'data'

const Service = ({ href, service, ...props }) => (
  <Link
    target="_blank"
    rel="noopener"
    href={href}
    mx={3}
    color={theme.colors.primaryDark}
    aria-label={service}
    children={<Icon glyph={service} size={36} />}
    {...props}
  />
)

const Footer = ({ children }) => (
  <Box.footer
    py={[4, 5]}
    bg={theme.colors.smoke}
    color={theme.colors.steel}
    align="center"
  >
    {children}
    <Heading.h3 fontSize={2} align="center" caps mb={2}>
      Pining to talk?
    </Heading.h3>
    <Flex
      color={theme.colors.primaryDark}
      justify="center"
      align="center"
      wrap
      mb={3}
    >
      <Service href={urls.twitter} service="twitter" />
      <Service href={urls.instagram} service="instagram" />
      <Service href={urls.facebook} service="facebook" />
      <Service href={urls.messenger} service="message" />
      <Service href={urls.email} service="email" />
    </Flex>
    <Heading.h3 fontSize={2} align="center" caps mb={2}>
      Hack Pennsylvania
    </Heading.h3>
    <Text mx="auto" style={{ maxWidth: '24rem' }} fontSize={1}>
      Fiscally sponsored by The Hack Foundation. Nonprofit EIN: 81-2908499.
    </Text>
  </Box.footer>
)

export default Footer
