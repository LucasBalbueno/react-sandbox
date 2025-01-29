import logo from '../../logo.svg';
import './App.css';
import { useState } from 'react';

// O useState é um Hook que permite adicionar o estado do React a um componente de função.
// O useState pode ser chamado várias vezes para adicionar vários estados a um componente.
// O useState pode ser chamado dentro de um loop, condicional ou qualquer bloco de código.

function App() {
  // O useState retorna um array com dois elementos:
  // O estado atual.
  // Uma função que permite atualizar o estado.
  // O useState recebe um argumento que é o valor inicial do estado.
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    // A função que atualiza o estado pode receber um argumento que é o novo valor do estado.
    setReverse(!reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <button type="button" onClick={handleClick}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

export default App;
