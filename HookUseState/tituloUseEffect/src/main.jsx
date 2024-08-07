import React from 'react'
import ReactDOM from 'react-dom/client'
import { TitleUpdater } from './components/TitleUpdater'
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <TitleUpdater />
  </React.StrictMode>,
)
