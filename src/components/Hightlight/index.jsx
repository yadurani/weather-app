import React from 'react'

import TextBase from '../Common/Text/Paragraph/ParagraphBase'
import {
  HightlightText,
  HightlightTextSecondary,
  HightlightWrapper,
} from './styles'

const Hightlight = ({ title, number, measure, children }) => {
  return (
    <HightlightWrapper>
      <TextBase>{title}</TextBase>
      <HightlightText>
        {number}
        <HightlightTextSecondary>{measure}</HightlightTextSecondary>
      </HightlightText>
      {children}
    </HightlightWrapper>
  )
}

export default Hightlight
