import styled from 'styled-components'

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: minmax(200px, 459px) 1fr;
  min-height: 100vh;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`
export default LayoutWrapper
