import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { AuthProvider } from './context/AuthContext.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Profile } from './components/Profile/Profile.jsx';
import { Infos } from './components/Infos/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/infos',
    element: <Infos />
  },
  {
    path: '/profile',
    element: <Profile />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
