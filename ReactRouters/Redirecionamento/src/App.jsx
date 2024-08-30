import { Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
     <h1>Menu do site</h1>

     <p>Faça seu login!</p>

     <Link to={'/login'}>Fazer Login</Link>
    </>
  )
}

export default App
