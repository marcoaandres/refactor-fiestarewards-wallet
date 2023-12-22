import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme'
import App from './App.tsx'
import {Fonts} from './theme/Fonts.tsx'
import { Provider } from 'react-redux'
import { store } from './store'
// import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        {/* use react router */}
        <BrowserRouter>
          {/* <HashRouter> */}
            <Fonts/>
            <App />
          {/* </HashRouter> */}
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
