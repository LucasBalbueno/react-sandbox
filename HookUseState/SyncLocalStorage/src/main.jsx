import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'

import { PersistentCounter } from './components/PersistentCounter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <PersistentCounter />
  </React.StrictMode>,
)
