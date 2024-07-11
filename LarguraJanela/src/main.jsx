import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'
import { WindowSize } from './components/WindowSize'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <WindowSize />
  </React.StrictMode>,
)