import React from 'react'

import {
  ProgressWrapper,
  ProgressTrack,
  ProgressNumbers,
  ProgressPercentege,
} from './styles'

const Progress = ({ width }) => {
  return (
    <>
      <ProgressNumbers>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </ProgressNumbers>
      <ProgressWrapper>
        <ProgressTrack width={width} />
      </ProgressWrapper>
      <ProgressPercentege>%</ProgressPercentege>
    </>
  )
}

export default Progress
