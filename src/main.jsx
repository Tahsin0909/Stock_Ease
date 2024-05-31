import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './Theme/Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
