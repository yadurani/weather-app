import styled from 'styled-components'

export const SubtitleBase = styled.h3`
  color: ${({ secondary, theme }) =>
    secondary ? theme.color.greyBase : theme.color.greyLight};
  font-size: ${({ theme }) => theme.size.font.xl};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.size.space.xxl};
`

export const SubtitleLg = styled.h3`
  font-weight: 600;
  font-size: ${({ theme }) => theme.size.font.xxl};
`
