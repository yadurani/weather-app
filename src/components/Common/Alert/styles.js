import styled from 'styled-components'

export const AlertWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.color.greyDarkness};
  color: white;
  padding: ${({ theme }) => theme.size.space.md};
  z-index: 2;
`
