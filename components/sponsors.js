import React from 'react'
import styled from '@emotion/styled'
import { Container } from './blocks'
import { Box, useColorMode } from 'theme-ui'
import theme from '../lib/theme'

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      ${(props) => (props.section === 'additionalSupport' ? 128 : 192)}px,
      1fr
    )
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${(props) => (props.section === 'sponsors' ? 5 : 3)}rem;
    ${(props) =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const data = {
  sponsors: [
    {
      name: 'ZEIT',
      link: 'https://zeit.co',
      image: 'zeit.svg'
    },
    {
      name: 'Mike’s TV & Appliance',
      link: 'http://www.mikesvideo.com/',
      image: 'mikes.png'
    },
    {
      name: 'Invent Penn State',
      link: 'https://invent.psu.edu',
      image: 'ips.png'
    },
    {
      name: 'Linode',
      link: 'https://linode.com',
      image: 'linode.png'
    },
    {
      name: 'AGI',
      link: 'http://www.agintegrated.com/',
      image: 'agi.gif'
    },
    {
      name: '1Password',
      link: 'https://1password.com',
      image: '1password.png'
    },
    {
      name: 'Lambda School',
      link: 'https://lambdaschool.com',
      image: 'lambda.png'
    },
    {
      name: 'Repl.it',
      link: 'https://repl.it',
      image: 'replit.png'
    },
    {
      name: 'Think Company',
      link: 'https://www.thinkcompany.com//',
      image: 'thinkco.png'
    },
    {
      name: 'Ben Franklin Technology Partners',
      link: 'https://benfranklin.org/',
      image: 'ben-franklin.jpg'
    },
    {
      name: 'Hack Club Bank',
      link: 'https://hackclub.com/bank',
      image: 'hackclub-bank.svg'
    }
  ],
  additionalSupport: [
    {
      name: 'Sketch',
      link: 'https://sketchapp.com/',
      image: 'sketch.svg'
    },
    {
      name: 'Notion',
      link: 'https://www.notion.so/product',
      image: 'notion.svg'
    },
    {
      name: '.tech Domains',
      link: 'https://get.tech/',
      image: 'dottech.png'
    },
    {
      name: 'ExpressVPN',
      link: 'https://www.expressvpn.com/',
      image: 'expressvpn.png'
    }
  ]
}

const Sponsors = (props) => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} {...props}>
      {data[props.section || 'sponsors'].map((sponsor) => (
        <a key={sponsor.name} href={`${sponsor.link}`}>
          <img
            alt={sponsor.name}
            src={`//2019.hackpenn.com/sponsors/${sponsor.image}`}
            key={sponsor.image}
          />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
