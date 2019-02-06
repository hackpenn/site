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
  LargeButton,
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

const Action = styled(LargeButton.withComponent(A)).attrs({
  scale: true,
  chevronRight: true,
  py: 3,
  px: [3, 4],
  fontSize: [3, null, 4]
})`
  &:hover {
    box-shadow: 0 2px 12px 2px rgba(31, 89, 39, 0.25);
  }
`

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
          Pennsylvania’s premier high&nbsp;school hackathon happened Jan 19-20.
        </Heading.h1>
        <Box my={4}>
          <Action href="https://2019.hackpenn.com/recap">
            See Winter 2019 Recap
          </Action>
        </Box>
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
            Hack Pennsylvania was a 24-hour event where 150 programmers,
            artists, designers, & other high schoolers from across the Northeast
            came together to build apps & games. We provided workshops,
            mentorship, free meals & drinks, & places to sleep. The next
            morning, judges picked the best projects to demo and win prizes.
          </Lead>
        </Container>
        <Modules>
          <Module
            icon="welcome"
            name="Beginner-oriented"
            body="Students of all skill levels are welcome—we’ll hold multiple intro workshops & mentors will help you out!"
          />
          <Module
            icon="emoji"
            name="Endless fun"
            body="It goes way beyond coding. Meet new friends, come to the 2am dance party, win prizes."
          />
        </Modules>
        <Box my={4}>
          <Action href="https://2019.hackpenn.com">View Our 2019 Site</Action>
        </Box>
      </Container>
    </Box.section>
    <Box.section bg={theme.colors.white}>
      <Container width={1} px={3} pt={3} pb={[4, 5, 6]}>
        <Bannerline />
        <Headline color="primaryDark">Sponsors</Headline>
        <Text fontSize={3} color={theme.colors.steel} mb={4}>
          Want to sponsor future Hack Pennsylvania events?{' '}
          <A
            href="mailto:theo@hackpenn.com"
            color={theme.colors.primary}
            className="sans"
            hoverline
            chevronRight
          >
            Let’s chat
          </A>
        </Text>
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
