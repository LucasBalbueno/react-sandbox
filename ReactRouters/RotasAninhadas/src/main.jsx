import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { Overview } from './components/Overview';
import { Reports } from './components/Reports';
import { Settings } from './components/Settings';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Overview />
      },
      {
        path: '/overview',
        element: <Overview />
      },
      {
        path: '/reports',
        element: <Reports />
      },
      {
        path: '/settings',
        element: <Settings />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
