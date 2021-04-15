import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from './components/Common/Layout'
import Home from './pages/Home'
import theme from './schemas/theme'
import GlobalStyled from './styles/global'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyled />
    <Layout>
      <Home />
    </Layout>
  </ThemeProvider>
)

export default App
