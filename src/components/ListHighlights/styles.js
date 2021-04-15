import styled from 'styled-components'
import { ParagraphSm } from '../Common/Text/Paragraph/styles'

export const ListHightlightsWrapper = styled.ul`
  display: grid;
  grid-gap: ${({ theme }) =>
    `${theme.size.space.xxl} ${theme.size.space.xxxl}`};
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
`
export const WindStatus = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.size.space.xl};
  ${ParagraphSm} {
    margin: 0;
  }
`
export const WindStatusIcon = styled.i`
  background-color: ${({ theme }) => theme.color.greyDarkness};
  border-radius: 100%;
  display: grid;
  height: 30px;
  margin-right: ${({ theme }) => theme.size.space.xs};
  place-items: center;
  transform: rotate(115deg);
  width: 30px;
`
