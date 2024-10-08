import React from 'react'
import ReactDOM from 'react-dom/client'

import { LimitedCounter } from './components/LimitedCounter'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <LimitedCounter />
  </React.StrictMode>,
)