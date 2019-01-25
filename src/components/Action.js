import React from 'react'
import styled from 'styled-components'
import { LargeButton, OutlineButton } from '@hackclub/design-system'
import { theme } from 'theme'
import Link from 'gatsby-link'

const Action = ({ is = 'link', ...props }) => {
  const Component = {
    a: LargeButton,
    link: LargeButton.withComponent(Link),
    outline: OutlineButton,
    outlink: OutlineButton.withComponent(Link)
  }[is]
  return <Component fontSize={[2, 3]} {...props} />
}

export default styled(Action)`
  // border-radius: ${theme.radii[1]} !important;
  box-shadow: none !important;
  font-family: ${theme.font};
  &:focus,
  &:hover {
    box-shadow: ${theme.boxShadows[1]} !important;
  }
`
