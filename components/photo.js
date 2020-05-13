import styled from '@emotion/styled'
import { Box, Card, Text, Image, useColorMode } from 'theme-ui'
import theme from '../lib/theme'

const Caption = styled(Text)`
  display: block;
  font-size: ${theme.fontSizes[1]}px;
  line-height: ${theme.lineHeights.body};
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 ${theme.radii.extra}px ${theme.radii.extra}px;
  width: 100%;
  max-width: 100%;
  z-index: 0;
  ${(props) =>
    props.colorMode === 'dark'
      ? `
          background-color: rgba(0, 0, 0, 0.875);
          color: ${theme.colors.white};
          @supports (-webkit-backdrop-filter: none) or
            (backdrop-filter: none) {
            background-color: rgba(0, 0, 0, 0.75);
            -webkit-backdrop-filter: saturate(180%) blur(16px);
          }
        `
      : `
          background-color: rgba(255, 255, 255, 0.98);
          color: ${theme.colors.black};
          @supports (-webkit-backdrop-filter: none) or
            (backdrop-filter: none) {
            background-color: rgba(255, 255, 255, 0.75);
            -webkit-backdrop-filter: saturate(180%) blur(20px);
          }
        `};
  @media (prefers-reduced-transparency: reduce) {
    -webkit-backdrop-filter: auto !important;
  }
`

const Photo = ({ src, alt, showAlt, wide, ...props }) => {
  const [colorMode] = useColorMode()
  const showCaption = showAlt && alt
  return (
    <Card
      {...props}
      sx={{
        p: [0, 0, 0],
        borderRadius: 'extra',
        height: ['18rem', wide ? '66vh' : '20rem', wide ? '75vh' : '24rem'],
        minHeight: ['18rem', '20rem', '24rem'],
        position: 'relative',
        maxWidth: '100%',
        gridColumn: [null, wide ? 'span 2' : null],
        ...props.sx
      }}
    >
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {showCaption && <Caption colorMode={colorMode} children={alt} />}
    </Card>
  )
}

export default Photo
