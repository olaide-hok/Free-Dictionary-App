import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {ChakraProvider} from '@chakra-ui/react'
import theme from '../src/theme'
import '../src/theme/styles.css'
import {DictionaryProvider} from './context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <DictionaryProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </DictionaryProvider>
  </React.StrictMode>
)
