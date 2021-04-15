import styled from 'styled-components'
import { ParagraphBase } from '../Common/Text/Paragraph/styles'

export const DayWrapper = styled.li`
  background-color: ${({ theme }) => theme.color.blueBase};
  padding: ${({ theme }) => `${theme.size.space.lg} ${theme.size.space.xl}`};
  text-align: center;
  ${ParagraphBase} {
    white-space: nowrap;
  }
`
export const DayTemp = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  ${ParagraphBase} {
    margin-bottom: 0;
  }
`
export const DayImg = styled.img`
  height: 62px;
  margin-bottom: ${({ theme }) => theme.size.space.xxl};
`
