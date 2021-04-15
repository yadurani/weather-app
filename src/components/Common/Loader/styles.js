import styled, { keyframes } from 'styled-components'

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const LoadWrapper = styled.div`
  position: ${({ search }) => (search ? 'initial' : 'fixed')};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ search, theme }) =>
    search ? 'transparent' : theme.color.blueBase};
  display: grid;
  justify-content: center;
  align-items: center;
`

export const LoadIconText = styled.div`
  text-align: center;
`

export const LoadText = styled.p`
  margin-top: 1rem;
  margin-bottom: 0;
  text-align: center;
  animation: ${FadeIn} 1s infinite linear;
`
