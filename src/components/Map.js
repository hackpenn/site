import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'
import { theme } from 'theme'
import Sheet from 'components/Sheet'

const Base = styled(Sheet)`
  width: 100%;
  padding: 0 !important;
  > div {
    min-height: 16rem;
  }
`

const Pin = styled.span`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  border-radius: 1rem;
  background-color: ${theme.colors.primaryDark};
  background-image: url(${require('../../static/flag.png')});
  background-size: 100%;
`

const Map = ({ center, zoom, ...props }) => (
  <Base {...props}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDh_yh-nKzp_8so8APsLGxtAiCpx-VpwjU' }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <Pin lat={center.lat} lng={center.lng} text="My Marker" />
    </GoogleMapReact>
  </Base>
)

Map.defaultProps = {
  center: {
    lat: 40.8114503,
    lng: -77.9462519
  },
  zoom: 12,
  p: 0
}

export default Map
