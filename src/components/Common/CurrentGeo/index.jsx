import React from 'react'
import { MdGpsFixed } from 'react-icons/md'

import { CurrentWrapper } from './styles'

const CurrentGeo = ({ onClick }) => {
  return (
    <CurrentWrapper
      title="Tu ubicación"
      aria-label="Current Location"
      onClick={onClick}>
      <MdGpsFixed size={22} />
    </CurrentWrapper>
  )
}

export default CurrentGeo
