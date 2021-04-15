import styled from 'styled-components'

export const ParagraphBase = styled.p`
  color: ${({ secondary, theme }) =>
    secondary ? theme.color.greyBase : theme.color.greyLight};
  ${({ third, theme }) =>
    third &&
    `
    color: ${theme.color.greyDark};
  `}
  font-size: ${({ theme }) => theme.size.font.md};
  margin-bottom: ${({ theme }) => theme.size.space.sm};
`

export const ParagraphSm = styled.p`
  font-size: ${({ theme }) => theme.size.font.sm};
`
export const ParagraphLg = styled.p`
  font-size: ${({ theme }) => theme.size.font.lg};
`

ParagraphBase.defaultProps = {
  default: null,
}
