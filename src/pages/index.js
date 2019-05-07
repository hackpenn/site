import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Card,
  Image,
  Text,
  Hide,
  Link as A
} from '@hackclub/design-system'
import { theme } from 'theme'
import { Link } from 'gatsby'
import Bannerline from 'components/Bannerline'
import Calendar from 'components/Calendar'
import Footer from 'components/Footer'
import Grid from 'components/Grid'
import Headline from 'components/Headline'
import Layout from 'components/Layout'
import Leadership from 'components/Leadership'
import Modules from 'components/Modules'
import Module from 'components/Module'
import Nav from 'components/Nav'
import Photo from 'components/Photo'
import Sponsors from 'components/Sponsors'

const Lead = styled(Container.withComponent(Text)).attrs({
  fontSize: 4,
  mx: 'auto'
})``

const HiddenPhoto = styled(Hide.withComponent(Photo))``

const Questions = styled(Container).attrs({ maxWidth: 72, mt: [3, 4] })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  width: 100%;
  ${theme.mediaQueries.sm} {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: ${theme.space[4]}px;
  }
  > div {
    background-color: rgba(255, 255, 255, 0.875);
    border-radius: ${theme.radii[2]};
    transition: ${theme.transition} all;
    box-shadow: ${theme.boxShadows[1]};
    &:hover {
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: ${theme.boxShadows[2]};
    }
  }
`
const Question = ({ name, body, ...props }) => (
  <Card p={[3, 4]} {...props}>
    <Heading.h3 fontSize={2} caps mt={0} mb={[1, 2]} children={name} />
    <Text fontSize={2} color="black" my={0} children={body} />
  </Card>
)

/*
const Prizes = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  grid-column: span 2;
  ${theme.mediaQueries.md} {
    grid-template-columns: auto 1fr;
  }
  > div {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  ${Prize} {
    max-width: 12rem;
  }
`
const Prize = ({ img, name }) => (
  <Flex align="center" className="sans" mx={3}>
    <Image src={`/prizes/${img}`} />
    <Text bold fontSize={3} children={name} />
  </Flex>
)
*/

const LinkOut = styled(A).attrs({
  color: 'inherit',
  underline: true,
  chevronRight: true,
  bold: true,
  fontSize: 3,
  mt: 3,
  className: 'sans'
})`
  display: block;
`
LinkOut.span = styled(Text.span.withComponent(LinkOut))`
  margin-top: ${theme.space[3]}px;
`
LinkOut.link = styled(LinkOut.withComponent(Link))``
A.link = styled(A.withComponent(Link))``

export default () => (
  <Layout>
    <Nav />
    <Box.header
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      pt={[3, 4]}
      pb={[3, 5]}
    >
      <Container width={1} px={3}>
        <Image
          alt="Hack Pennsylvania logo"
          src={require('../../static/hero.svg')}
        />
        <Heading.h1
          fontSize={[4, 5, 6]}
          style={{ fontFamily: theme.mono }}
          mt={3}
        >
          Pennsylvania’s premiere high&nbsp;school hackathon is back.
        </Heading.h1>
      </Container>
    </Box.header>
    <Box.section bg={theme.colors.snow}>
      <Container
        width={1}
        px={3}
        pt={3}
        pb={[4, 5, 6]}
        color={theme.colors.black}
      >
        <Container maxWidth={48} mx={0}>
          <Bannerline />
          <Headline color="primaryDark">Welcome to the “hackathon.”</Headline>
          <Lead my={3} maxWidth={48}>
            Hack Pennsylvania is a 24-hour event where 150 programmers, artists,
            designers, & other high schoolers from across the Northeast come
            together to build apps & games. We provide workshops, mentorship,
            free meals & drinks, & places to sleep. The next morning, judges
            pick the best projects to demo and win prizes.
          </Lead>
        </Container>
      </Container>
    </Box.section>
    <Box.section bg={theme.colors.white}>
      <Container width={1} px={3} pt={3} pb={[4, 5, 6]}>
        <Bannerline />
        <Headline color="primaryDark" mb={4}>
          Recap of our winter 2019 event
        </Headline>
      </Container>
    </Box.section>
    <Box.section bg={theme.colors.snow}>
      <Container width={1} px={3} pt={3} pb={[4, 5, 6]}>
        <Bannerline />
        <Headline color="primaryDark" mb={4}>
          We{' '}
          <span role="img" aria-label="Green heart emoji">
            💚
          </span>{' '}
          our sponsors!
        </Headline>
        <Sponsors section="sponsors" />
        <Headline
          color={theme.colors.slate}
          fontSize={[3, 4]}
          caps
          mt={[4, 5]}
          pb={[3, 4]}
        >
          Additional support from
        </Headline>
        <Sponsors section="additionalSupport" />
      </Container>
    </Box.section>
    <Leadership />
    <Footer />
  </Layout>
)
