import { Box, Container as Base, Card, Grid } from 'theme-ui'

export const Banner = (props) => (
  <Box
    sx={{
      backgroundImage:
        'linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,0.375)), url(https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fceremony.jpg?v=1565769222245)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textShadow: '0 2px 4px rgba(0,0,0,.I 75)',
      py: [4, 5, 6, 7],
      mb: [4, 5]
    }}
  >
    <Base
      {...props}
      sx={{
        textAlign: 'center',
        maxWidth: [null, 1080, 1080],
        h1: {
          fontSize: [5, 6, 7],
          lineHeight: 'tight',
          mt: [0, -2, -4, -5],
          mb: 3
        },
        h2: {
          fontSize: [2, 3, 4],
          fontFamily: 'mono',
          lineHeight: 'body',
          fontWeight: 'body',
          mb: 2,
          a: {
            color: 'red'
          }
        },
        p: {
          mb: 4
        },
        ul: {
          listStyle: 'none',
          display: 'flex',
          p: 0,
          m: 0
        },
        li: {
          mr: 3
        }
      }}
    />
  </Box>
)

export const Container = ({ wide, ...props }) => (
  <Box
    {...props}
    sx={{
      px: 3,
      width: '100%',
      mx: 'auto',
      maxWidth: [null, wide ? 1080 : 768],
      h2: {
        fontSize: [3, 4, 5],
        mt: [4, 5],
        mb: [2, 3]
      },
      h3: {
        fontSize: [2, 3, 4],
        mt: [3, 4],
        mb: [2, 3]
      },
      ...props.sx
    }}
  />
)

export const Callout = (props) => (
  <Card
    {...props}
    sx={{
      bg: 'elevated',
      px: [3, 4],
      py: [2, 3, 4],
      borderRadius: 'extra',
      boxShadow: 'sheet',
      fontSize: [2, 3],
      mb: [4, 5],
      ...props.sx
    }}
  />
)

export const List = (props) => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      a: {
        fontWeight: 'bold',
        color: 'primary',
        textDecoration: 'none'
      },
      em: {
        display: 'block',
        color: 'muted',
        fontFamily: 'mono',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 0
      },
      ...props.sx
    }}
  />
)

export const Gallery = (props) => (
  <Grid
    gap={[3, 4, 5]}
    columns={['auto', null, 'repeat(2, 1fr)']}
    {...props}
    sx={{
      width: '100%',
      px: [3, 4, null, 5],
      mb: [3, 4, 5, 6],
      'ul, ol': {
        textAlign: [null, 'right'],
        listStyle: 'none',
        pl: 0
      },
      'p, ol, ul': {
        maxWidth: 1080 / 2,
        p: [3, 4]
      },
      'p, li': {
        color: 'muted',
        fontFamily: 'mono',
        fontSize: [2, 3],
        mt: 0,
        mb: 2
      },
      ...props.sx
    }}
  />
)

export const Team = (props) => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      li: {
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: ['64px 1fr', '72px 1fr'],
        alignItems: 'center'
      },
      p: {
        my: 0,
        '&:first-child': {
          lineHeight: 0
        }
      },
      strong: {
        fontSize: [1, 2]
      },
      em: {
        display: 'block',
        color: 'muted',
        fontFamily: 'mono',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: [0, 1],
        my: 0,
        a: {
          color: 'primary'
        }
      },
      img: {
        flexShrink: 'none',
        borderRadius: 'circle',
        width: [64, 72],
        height: [64, 72],
        objectFit: 'cover',
        objectPosition: 'center',
        mr: 3
      },
      ...props.sx
    }}
  />
)
