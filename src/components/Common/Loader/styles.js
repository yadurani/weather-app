import styled from 'styled-components'

export const LoadWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.blueBase};
  display: grid;
  justify-content: center;
  align-items: cneter;
`
