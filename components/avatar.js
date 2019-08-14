import { Image } from 'rebass'

export default ({ size = 32, light = false, ...props }) => (
  <Image
    {...props}
    src={`https://2019.hackpenn.com/flag${light && '--light'}@2x.png`}
    alt="Hack Penn avatar"
    width={size}
    height={size}
    sx={{ borderRadius: 'circle', overflow: 'hidden', ...props.sx }}
  />
)
