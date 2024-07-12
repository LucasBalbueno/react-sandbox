import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './styles/global'

import { RealTimeClock } from './components/RealTimeClock'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RealTimeClock />
  </React.StrictMode>,
)
