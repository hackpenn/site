import React from 'react'
import { Box, Container, Heading, Text } from '@hackclub/design-system'
import Leaders from 'components/Leaders'
import Bannerline from 'components/Bannerline'
import { theme } from 'theme'

const Leadership = () => (
  <Box.section bg={theme.colors.snow} py={[4, 5]} id="leadership">
    <Container px={3} mb={[4, 5]}>
      <Bannerline mt={[3, 4]} />
      <Heading.h2 color="primaryDark" fontSize={[5, 6]} mb={2}>
        Leadership
      </Heading.h2>
      <Text
        color="black"
        fontSize={[3, 4]}
        mb={4}
        style={{ maxWidth: '48rem' }}
      >
        We’re a passionate, diverse group of high school students planting new
        seeds of tech talent in PA through coding.{' '}
        <span role="img" aria-label="Plant emoji">
          🌱
        </span>
      </Text>
      <Leaders />
    </Container>
  </Box.section>
)

export default Leadership
