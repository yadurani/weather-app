import React from 'react'

import { SubtitleBase } from './styles'

const Subtitle = ({ as, children, secondary }) => {
  return <SubtitleBase as={as} children={children} secondary={secondary} />
}

export default Subtitle
