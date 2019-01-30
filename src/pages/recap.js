import React from 'react'
import { Box, Container, Heading, Link as A } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Headline from 'components/Headline'
import Photo from 'components/Photo'
import Sponsors from 'components/Sponsors'
import Grid from 'components/Grid'
import Footer from 'components/Footer'

export default () => (
  <Layout>
    <Nav />
    <Box.header
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      px={2}
      pt={[4, 5]}
      pb={[3, 4]}
    >
      <Container width={1} px={3}>
        <Headline mt={0} fontSize={[6, 7]}>
          Recap
        </Headline>
        <Heading.h2
          fontSize={[3, 4, 5]}
          style={{ fontFamily: theme.mono, maxWidth: '42rem' }}
          mt={3}
        >
          Photos from our winter 2019 event—it was a huge success!
        </Heading.h2>
      </Container>
    </Box.header>
    <Container width={1} px={3}>
      <Grid py={[4, 5]}>
        {Array.from({ length: 12 }, k => k + 1).map(n => (
          <Photo key={n} image={`/w2019_recap/${n}.jpg`} />
        ))}
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
