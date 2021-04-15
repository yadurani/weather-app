import React from 'react'
import Sun from '../Icons/Sun/sun'
import { LoadIconText, LoadText, LoadWrapper } from './styles'

const Loading = ({ search }) => {
  return (
    <LoadWrapper search={search}>
      <LoadIconText>
        <Sun />
        <LoadText>Loading Weather!!</LoadText>
      </LoadIconText>
    </LoadWrapper>
  )
}

export default Loading
