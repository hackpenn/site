import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Link as A
} from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Headline from 'components/Headline'
import Photo from 'components/Photo'
import Sheet from 'components/Sheet'
import Sponsors from 'components/Sponsors'
import Grid from 'components/Grid'
import Footer from 'components/Footer'

const Paragraph = styled(Text).attrs({
  fontSize: [3, 4],
  my: [3, 4],
  color: theme.colors.black
})``

const Quote = styled(Sheet).attrs({
  maxWidth: 32,
  px: 3,
  py: [3, 4],
  bg: 'primaryDark',
  fontSize: 3,
  color: 'white'
})`
  position: relative;
  &:before {
    content: '“';
    line-height: 1;
    color: ${theme.colors.primary};
    font-size: 3rem;
    padding: 1.125rem;
    position: absolute;
    left: 0;
    top: 0;
  }
`
const QuoteAuthor = styled(Flex.withComponent(Box)).attrs({
  align: 'center',
  fontSize: 3
})`
  position: absolute;
  bottom: 1.5rem;
`

export default () => (
  <Layout>
    <Container width={1} px={3} pt={[3, 4]}>
      <Paragraph>
        On January 19-20, 111 developers, designers & artists came from across
        the Northeast to State College, PA. They&nbsp;built websites, games, &
        even a talking robot.
      </Paragraph>
      <Paragraph>
        They attended workshops, joined in our other activities (dance party!),
        and learned all about code. On Sunday morning, attendees presented their
        projects & won prizes.
      </Paragraph>
      <Headline color="primaryDark" mt={4}>
        Opening Ceremony
      </Headline>
      <Text fontSize={[3, 4]} color={theme.colors.black} mt={3}>
        Description
      </Text>
      <Grid py={4}>
        {[1, 2].map(n => (
          <Photo key={n} src={`/recap/w2019/opening-ceremony-${n}.jpg`} />
        ))}
      </Grid>
      <Grid py={4}>
        <Quote mt={[3, 4, 5]}>
          <Text fontSize={[4, 5]} pt={[4, 0]} bold>
            Y’all were pretty spot on.
          </Text>
          <QuoteAuthor>
            <Text.span bold>Attendee</Text.span>, Hack Pennsylvania
          </QuoteAuthor>
        </Quote>
        <Quote mt={[3, 4, 5]}>
          <Text fontSize={[4, 5]} pt={[4, 0]} bold>
            It was really fun and I hope to go to another hackathon soon!
          </Text>
          <QuoteAuthor>
            <Text.span bold>Attendee</Text.span>, Hack Pennsylvania
          </QuoteAuthor>
        </Quote>
      </Grid>
      <Headline color="primaryDark" py={3}>
        We{' '}
        <span role="img" aria-label="Green heart emoji">
          💚
        </span>{' '}
        our sponsors!
      </Headline>
      <Sponsors section="sponsors" pb={5} />
    </Container>
    <Footer />
  </Layout>
)
