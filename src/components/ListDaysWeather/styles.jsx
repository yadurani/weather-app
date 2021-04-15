import styled from 'styled-components'

export const ListDayWrapper = styled.ul`
  display: grid;
  grid-gap: ${({ theme }) => theme.size.space.xl};
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin-bottom: ${({ theme }) => theme.size.space.xxxxxl};
  margin-top: ${({ theme }) => theme.size.space.xxxxl};
  @media (max-width: 960px) {
    margin-top: ${({ theme }) => theme.size.space.xxxl};
    padding-left: ${({ theme }) => theme.size.space.xxl};
    padding-right: ${({ theme }) => theme.size.space.xxl};
  }
`
