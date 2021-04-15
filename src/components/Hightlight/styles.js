import styled from 'styled-components'

export const HightlightWrapper = styled.li`
  background-color: ${({ theme }) => theme.color.blueBase};
  text-align: center;
  padding: ${({ theme }) => theme.size.space.xl};
`
export const HightlightText = styled.h4`
  color: ${({ theme }) => theme.color.greyLight};
  font-size: ${({ theme }) => theme.size.font.xxxxl};
  margin-top: -0.5rem;
  margin-bottom: ${({ theme }) => theme.size.space.sm};
  font-weight: 600;
`
export const HightlightTextSecondary = styled.span`
  font-size: ${({ theme }) => theme.size.font.xxl};
  font-weight: 500;
`
