import { useState, useEffect } from 'react';

// O UseEffect é um Hook que serve para executar efeitos colaterais em componentes funcionais
// Ele é uma combinação de componentDidMount, componentDidUpdate e componentWillUnmount
// Podendo usar o ComponentWillUnmount para limpar o efeito em todos os casos de useEffect

const eventFn = () => {
  console.log('h1 clicado');
};

export function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda vez que o component atualiza
  // Percebe-se que não inserimos o Array de dependência
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa 1x
  // Percebe-se que inserimos o Array de dependência vazio
  useEffect(() => {
    // Inserimos o ? para verificar se o elemento existe e não apontar erro caso não exista

    // Aqui toda a vez que o componente for montado, ele irá adicionar um evento de click no h1
    // Mas isso pode causar um erro, pois toda vez que o componente for montado, ele irá adicionar um novo evento novamente, assim acumulando eventos
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // Para resolver isso, podemos usar o return para limpar o evento, assim toda vez que o componente for desmontado, ele irá remover o evento
    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    // Toda a variavel que é usada dentro do useEffect, deve ser declarada no Array de dependência
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);
  // Mas podemos colcoar como uma dependencia uma variavel que nao é usada dentro do useEffect

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>
        C1: {counter} C2: {counter2}{' '}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}
