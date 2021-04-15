import styled from 'styled-components'
import { ParagraphBase } from '../Text/Paragraph/styles'

export const CopyWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-top: ${({ theme }) => theme.size.space.xxxxxxl};
  ${ParagraphBase} {
    margin-bottom: 0;
  }
`
export const CopyLink = styled.a`
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`
