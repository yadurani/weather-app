import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
  }
  html, body {
    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
    color: #E7E7EB;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  button {
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`
export default GlobalStyled
