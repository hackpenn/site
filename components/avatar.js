import { Avatar } from 'theme-ui'

export default ({ size = 32, light = false, ...props }) => (
  <Avatar
    sx={{
      transition: 'transform .25s ease-in-out',
      '&:hover': { transform: 'scale(1.25)' }
    }}
    {...props}
    src={`https://2019.hackpenn.com/flag${light && '--light'}@2x.png`}
    alt="Hack Penn avatar"
    width={size}
    height={size}
  />
)
