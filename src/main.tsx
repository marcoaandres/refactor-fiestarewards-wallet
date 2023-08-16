import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme'
import App from './App.tsx'
import {Fonts} from './theme/Fonts.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* use react router */}
      <BrowserRouter>
        <Fonts/>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
