import React from 'react'
import styled from 'styled-components'
import { Text, Flex } from '@hackclub/design-system'
import { theme } from 'theme'

const Background = styled(Flex).attrs({
  flexDirection: 'column',
  className: 'sans'
})`
  flex-shrink: 0;
  overflow: hidden;
  text-align: center;
  width: 128px;
  height: 128px;
  border-color: ${theme.colors.white};
  border-style: solid;
  border-width: 6px;
  border-radius: 24px;
  font-weight: bold !important;
`
const Month = styled(Text.span).attrs({
  fontSize: 3,
  py: 1,
  bg: 'white',
  color: 'primary',

  caps: true
})`
  display: block;
  line-height: 1.5;
`
const Day = styled(Text.span).attrs({ color: 'white' })`
  font-size: 64px;
  line-height: 1.25;
`

const Calendar = ({ month, day }) => (
  <Background>
    <Month children={month} />
    <Day children={day} />
  </Background>
)

export default Calendar
