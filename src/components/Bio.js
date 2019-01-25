import React from 'react'
import styled from 'styled-components'
import { Box, Avatar, Flex, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Sheet from 'components/Sheet'

const Base = styled(Sheet)`
  display: flex;
  align-items: center;
  max-width: 36rem;
  background-color: rgba(255, 255, 255, 0.875);
  transition: ${theme.transition} all;
  min-width: 18rem;
  max-width: 24rem;
  margin: 0 ${theme.space[2]}px;

  img {
    flex-shrink: 0;
  }

  h3 {
    transition: ${theme.transition} color;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.95);
    h3 {
      color: ${theme.colors.alt};
    }
  }
`

const Title = styled(Flex.withComponent('a'))`
  align-items: center;
  flex-wrap: wrap;
  color: inherit;
  line-height: 1.25;
  + p {
    line-height: 1.25;
  }
`

const Bio = ({ name, bio, twitter, ...props }) => (
  <Base p={3} mb={0} {...props}>
    <Avatar size="64px" src={`/judges/${twitter}.png`} alt={name} />
    <Box ml={[2, 3]}>
      <Title href={`https://twitter.com/@${twitter}`}>
        <Heading.h3
          fontSize={3}
          my={0}
          mr={2}
          color={theme.colors.black}
          children={name}
        />
        <Text.span
          fontSize={1}
          color={theme.colors.muted}
          children={`@${twitter}`}
        />
      </Title>
      <Text fontSize={2} mt={1} color={theme.colors.slate} children={bio} />
    </Box>
  </Base>
)

export default Bio
