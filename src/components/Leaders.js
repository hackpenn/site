import React from 'react'
import styled from 'styled-components'
import { Box, Text, Icon, Button, Avatar } from '@hackclub/design-system'
import { theme } from 'theme'
import data from 'data'

const Base = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${theme.space[3]}px;

  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${theme.mediaQueries.lg} {
    grid-template-columns: repeat(6, 1fr);
  }
`
const Wrap = styled(Box)`
  position: relative;
  width: 96px;
  height: 96px;
  ${Avatar} {
    width: 100%;
    height: 100%;
  }
  ${theme.mediaQueries.md} {
    width: 128px;
    height: 128px;
  }
`
const EmailButton = styled(Button.withComponent('a'))`
  position: absolute;
  right: 0;
  bottom: 0;
  line-height: 0;
  padding: ${theme.space[1]}px;
`
const LeaderName = styled(Text)`
  font-family: ${theme.font};
  line-height: 1.25;
`
const username = a => a.split(' ')[0].toLowerCase()
const Leader = ({ name, pronouns, ...props }) => (
  <Box align="center">
    <Wrap mx="auto">
      <Avatar src={`/team/${username(name)}.jpg`} alt={name} />
      <EmailButton
        href={`mailto:${username(name)}@hackpenn.com`}
        bg={theme.colors.primary}
        color={theme.colors.white}
        children={<Icon glyph="email" size={24} />}
        circle
      />
    </Wrap>
    <LeaderName fontSize={[3, 4]} mt={2} children={name} />
    <Text color={theme.colors.muted} fontSize={2} children={pronouns} />
  </Box>
)

const Leaders = props => (
  <Base {...props}>
    {data.leaders.map(profile => (
      <Leader
        name={profile.name}
        pronouns={profile.pronouns}
        key={profile.email}
      />
    ))}
  </Base>
)

export default Leaders
