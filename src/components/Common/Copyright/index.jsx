import React from 'react'
import TextBase from '../Text/Paragraph/ParagraphBase'
import { ParagraphSm } from '../Text/Paragraph/styles'
import { CopyWrapper, CopyLink } from './styles'

const Copyright = () => {
  const URL_DEV = 'https://devchallenges.io/paths/front-end-developer'
  return (
    <CopyWrapper>
      <TextBase as={ParagraphSm} secondary>
        created by <b>Yadu López</b> 💛 -{' '}
        <CopyLink href={URL_DEV} target="_blank">
          devChallenges.io
        </CopyLink>
      </TextBase>
    </CopyWrapper>
  )
}

export default Copyright
