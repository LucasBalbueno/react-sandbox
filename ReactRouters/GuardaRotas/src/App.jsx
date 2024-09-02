import './App.css'

import { LoginButton } from './components/LoginButton/LoginButton';
import { LogoutButton } from './components/LogoutButton/LogoutButton';
import { Infos } from './components/Infos';
import { Profile } from './components/Profile/Profile';

import { PrivateRoute } from './routes/PrivateRoute' 

function App() {

  return (
    <>
      <h1>Bem vindo!</h1>
      <LoginButton />
      <LogoutButton />
      <PrivateRoute />
    </>
  )
}

export default App
