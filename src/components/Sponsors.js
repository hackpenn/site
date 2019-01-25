import React from 'react'
import styled from 'styled-components'
import { Container, theme } from '@hackclub/design-system'
import data from 'data'

const Base = styled(Container)`
  display: grid;
  grid-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => (props.section === 'sponsors' ? 16 : 8)}rem, 1fr)
  );
  align-items: center;
  justify-content: center;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 5 : 3)}rem;
  }
`

const Sponsors = props => (
  <Base {...props}>
    {data[props.section].map(sponsor => (
      <a href={`${sponsor.link}`}>
        <img
          alt={sponsor.name}
          src={`/sponsors/${sponsor.image}`}
          key={sponsor.image}
        />
      </a>
    ))}
  </Base>
)

export default Sponsors
