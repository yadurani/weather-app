import styled from 'styled-components'
import CircleBtnWrapper from '../Common/BtnCircleDegree/styles'

export const HeadDegreesWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-end;
  ${CircleBtnWrapper} {
    margin-right: 0;
  }
  @media (max-width: 960px) {
    display: none;
  }
`
