import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Link as A
} from '@hackclub/design-system'
import { theme } from 'theme'
import data from 'data'
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
          Photos from our winter 2019 event — it&nbsp;was a huge success!
        </Heading.h2>
      </Container>
    </Box.header>
    <Container width={1} px={3}>
      {data.recap.map(section => (
        <>
          <Headline color="primaryDark" mt={4}>
            {section.title}
          </Headline>
          <Text fontSize={[3, 4]} color={theme.colors.black} mt={3}>
            {section.description}
          </Text>
          <Grid py={4}>
            {section.photos.map(n => (
              <Photo key={n} src={`/recap/w2019/${section.prefix}-${n}.jpg`} />
            ))}
          </Grid>
        </>
      ))}
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
