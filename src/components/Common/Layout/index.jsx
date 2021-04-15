import React from 'react'
import PropTypes from 'prop-types'

import LayoutWrapper from './styles'
import Main from '../Main'
import Aside from '../Aside'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Aside />
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
