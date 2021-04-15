import React from 'react'
import PropTypes from 'prop-types'

import { ParagraphBase } from './styles'

const TextBase = ({ children, secondary, third, as }) => (
  <ParagraphBase
    as={as}
    secondary={secondary}
    third={third}
    children={children}
  />
)

TextBase.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  third: PropTypes.bool,
}

export default TextBase
