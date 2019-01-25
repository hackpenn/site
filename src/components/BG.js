import React from 'react'
import { theme } from 'theme'

const BG = ({ color }) => (
  <style children={`body{background:${theme.colors[color]};}`} />
)

export default BG
