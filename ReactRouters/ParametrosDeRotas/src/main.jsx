import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GlobalStyles from './styles/global.js'

import { UserDetail } from './components/UserDetail'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/user",
    element: <App />
  },
  // nested router (rotas com parametros) / dynamic routes
  {
    path: "/user/:id",
    element: <UserDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
