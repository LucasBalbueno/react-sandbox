import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/global'

import { ToggleText } from './components/ToggleText'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ToggleText />
  </React.StrictMode>,
)
