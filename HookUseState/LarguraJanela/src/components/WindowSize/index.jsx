import { useState, useEffect } from 'react';
import { Container } from './style';

export function WindowSize () {
    // Inicializamos o useState com seu valor inicial como a largura inicial da tela.
    // Usamos 'setWidth' para atualizar o estado 'width'.
    const [ width, setWidth ] = useState(window.innerWidth);

    // Inicializamos o useEffect para ser executado toda a vez que a página for recarregada.
    useEffect(() => {
        // Criamos uma função para o 'setWidth' para atualiar o estado 'width' com a largura no momento da execução.
        function handleSize () {
            setWidth(window.innerWidth)
        }

        // colocamos um escutador de eventos na DOM. Toda a vez que a página mudar a largura, irá chamar a função que muda o estado do useState.
        window.addEventListener('resize', handleSize)

        // retorna uma função de limpeza que remove o escutador de eventos quando o useEffect termina o ciclo.
        return () => window.removeEventListener('resize', handleSize)
    }) // Não possui array de dependencias, logo o useEffect é executado apenas uma vez após a renderização do component.

    return (
        <Container>
            <h1>{width}</h1>
        </Container>
    )
}