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
          High schoolers: learn to code with 24&nbsp;hours of fun, free food, &
          prizes.
        </Heading.h1>
        <Flex align="center" my={4}>
          <Calendar month="January" day={19} />
          <Text.span align="left" fontSize={[3, 4]} ml={4} className="mono">
            <strong>Noon to noon</strong>
            <br />
            <A.link
              color="inherit"
              fontSize={[2, 3]}
              underline
              chevronRight
              to="/location"
            >
              State&nbsp;College, PA
            </A.link>
          </Text.span>
        </Flex>
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
          <Module
            icon="rep"
            name="Fabulous food"
            body="You’ll be served Panera dinner, midnight ice cream, bagel breakfast, & continuous snacks. (alt’s available)"
          />
          <Module
            icon="bag"
            name="You woodn’t believe the prizes"
            body="Pine over the AirPods, Google Home, Raspberry Pi, speakers, batteries, software subscriptions, & much more."
          />
        </Modules>
        <Grid mt={[4, 5]} color="white">
          <Box bg="primary" p={[3, 4]}>
            <Heading.h3 fontSize={[4, 5]} my={0}>
              Sprucing up PA
            </Heading.h3>
            <Text fontSize={3} my={2}>
              Last spring, we ran central PA’s first community-organized HS
              hackathon. This year, the event grows bigger + better—a tree-umph,
              we might say.
            </Text>
            <LinkOut href="https://hackhappyvalley.com/recap">
              See what happened at the last event
            </LinkOut>
          </Box>
          <HiddenPhoto
            xs
            sm
            aria-label="High school students coding at Hack Happy Valley"
            src="/hackhv/1.jpg"
          />
          <Photo
            aria-label="Projects being presented at Hack Happy Valley"
            src="/hackhv/2.jpg"
          />
          <Box bg="primaryDark" p={[3, 4]}>
            <Heading.h3 f={[4, 5]} my={0}>
              Hacking‽ Is that safe?
            </Heading.h3>
            <Text f={3} mt={2}>
              Hold up! No, we’re not “hacking” servers or databases. The word is
              being constructively re-defined as building things—apps, games,
              websites, etc. At Hack Pennsylvania, it’s all safe, supervised, &
              entirely educational.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box.section>
    <Box.section
      bg={theme.colors.primary}
      color={theme.colors.black}
      width={1}
      id="FAQ"
    >
      <Container py={[4, 5]} px={3}>
        <Bannerline mt={[3, 4]} bg={theme.colors.white} />
        <Headline>FAQ</Headline>
        <Questions>
          <Question
            name="How much does it cost?"
            body="Nothing, it’s totally free. Registration and attendance are 100% free, with meals, drinks, swag, & workshops included."
          />
          <Question
            name="Who can participate?"
            body="Any current student grades 8–12. If you’re under/over that age, send us a chat (in the corner) & we’ll see what we can do."
          />
          <Question
            name="What if I’m new to coding?"
            body="Are you elemen-tree? Complete beginners are not only welcome, but expected! Learn as you go with our intro workshops & mentors."
          />
          <Question
            name="What if I already know how to code?"
            body="All skill levels are welcome. Though we primarily market to beginners, we welcome experts (& everyone in between)."
          />
          <Question
            name="Do I need a team?"
            body="Nope! You’ll have an opportunity to meet fellow hackers and make teams of up to 4—find some new friends, bring yours, or work alone."
          />
          <Question
            name="What can I make?"
            body="Anything! A website, app, game, hardware, you name it. Judges will rate projects on creativity, technical skill demonstrated, polish, & utility."
          />
          <Question
            name="What should I bring?"
            body="Student ID, computer, chargers, anything for your hack (hardware?), toiletries, & a sleeping bag (maybe). For a few dozen hackers we have $30 travel reimbursements (bring receipts)."
          />
          <Question
            name="Who runs this? Is it supervised?"
            body={
              <>
                We’re independently-organized by high schoolers, sponsored via
                an intl. non-profit called{' '}
                <A href="https://hackclub.com" color={theme.colors.accent}>
                  Hack Club
                </A>
                . The event is fully supervised by over a dozen adults (with
                background checks).
              </>
            }
          />
        </Questions>
      </Container>
    </Box.section>
    <Box.section bg={theme.colors.white}>
      <Container width={1} px={3} pt={3} pb={[4, 5, 6]}>
        <Bannerline />
        <Headline color="primaryDark">Sponsors</Headline>
        <Text fontSize={3} color={theme.colors.steel} mb={4}>
          Want to sponsor Hack Pennsylvania?{' '}
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
