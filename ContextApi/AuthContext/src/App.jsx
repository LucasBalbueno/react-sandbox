import './App.css'

import { UserStatus } from './components/UserStatus/UserStatus';
import { LoginButton } from './components/LoginButton/LoginButton';
import { LogoutButton } from './components/LogoutButton/LogoutButton';

function App() {

  return (
    <>
      <UserStatus />
      <LoginButton />
      <LogoutButton />
    </>
  )
}

export default App
