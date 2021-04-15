import styled, { keyframes } from 'styled-components'

const rotateSun = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(365deg);
  }
`
export const PathRotate = styled.path`
  animation: ${rotateSun} 10s infinite linear;
  transform-origin: center;
`
