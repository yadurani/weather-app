import React from 'react'
import PropTypes from 'prop-types'
import { MainWrapper, MainContainer } from './styles'

const Main = ({ children }) => {
  return (
    <MainWrapper>
      <MainContainer>{children}</MainContainer>
    </MainWrapper>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
