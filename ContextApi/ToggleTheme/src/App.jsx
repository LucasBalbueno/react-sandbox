import './App.css'
import { useContext } from 'react';

import { Home } from './components/Home/Home';

import { ThemeContext } from './context/ThemeContext';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App  ${theme === 'light' ? 'light-mode' : ''}`}>
      <Home />
    </div>
  )
}

export default App
