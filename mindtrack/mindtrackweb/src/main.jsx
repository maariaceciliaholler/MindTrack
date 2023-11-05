import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AppRouter from './router/app.router.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
          <RouterProvider router={AppRouter} />
      </ChakraProvider>
  </React.StrictMode>,
)
