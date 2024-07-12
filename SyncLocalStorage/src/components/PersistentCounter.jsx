import { useState, useEffect } from 'react';
import { Container } from './style';

export function PersistentCounter () {
    // Inicializa o useState passando como valor padrão uma arrow function.
    // O 'setCount' terá a função de alterar o valor 'count'.
    const [ count, setCount ] = useState(() => {
        const initialValue = window.localStorage.getItem('count');

        // Retorna o initialValue se o valor 'count' de local storage existir, se não exister retorna 0.
        return initialValue !== null ? parseInt(initialValue) : 0;
    })

    // Cria-se um valor para manipular o valor 'count' de acordo com o evento do botão.
    function handleCount (event) {
        const buttonId = event.target.id;
        // Para decrementar.
        if (buttonId === 'prev') {
            setCount((prevCount) => prevCount - 1);
        
        // Para Incrementar
        } else if (buttonId === 'next') {
            setCount((prevCount) => prevCount + 1);
        }
    }

    // Inicializa o UseEffect que insere no localStorage o valor do contador no momento em que a página muda.
    useEffect(() => {
        window.localStorage.setItem('count', count);
    }, [count])

    return (
        <Container>
            <h1>{count}</h1>
            <div>
                <button id='prev' onClick={handleCount}>Anterior</button>
                <button id='next' onClick={handleCount}>Próximo</button>
            </div>
        </Container>
    )
}