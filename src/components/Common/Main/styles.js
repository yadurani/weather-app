import styled from 'styled-components'

export const MainWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.blueDark};
  padding-top: 42px;
  padding-bottom: 42px;
  position: relative;
  @media (max-width: 960px) {
    padding-left: ${({ theme }) => theme.size.space.xl};
    padding-right: ${({ theme }) => theme.size.space.xl};
  }
`

export const MainContainer = styled.div`
  max-width: 720px;
  margin: auto;
  @media (max-width: 1200px) {
    max-width: 520px;
  }
`
