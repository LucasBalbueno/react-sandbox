import { useState, useEffect } from 'react'
import { Container } from './style'

export function TitleUpdater () {
    // Inicializa o useState com o valor inicial 1.
    // O 'setNumber' irá atualizar o estado 'number'.
    const [ number, setNumber ] = useState(1);

    // Inicializamos o useEffect para ser executado toda a vez que a página for recarregada.
    useEffect(() => {
        // Muda o título da página toda a vez que algo é atualizado.
        document.title = `Contagem: ${number}`
    }, [number]) // O array de dependências é passado com number, logo toda a vez que o number atualizar o useEffect será atualizado.

    // Criando uma função para manipular o 'number' do useEffect, tendo o evento como parâmetro.
    function changeNumber (event) {
        // pegamos o id do elemento que executou o evento.
        const buttonID = event.target.id

        // Condicionamos o Id do botão.
        if (buttonID === 'prev') {
            // Pega o número anterior (que já estava setado como valor de useState) e decrementa se o botão que foi clicado foi o prev.
            setNumber((prevNumber) => prevNumber - 1)
        } else if (buttonID === 'next') {
            // Pega o número anterior (que já estava setado como valor de useState) e incrementa se o botão que foi clicado foi o next.
            setNumber((prevNumber) => prevNumber + 1)
        }
    }

    return (
        <Container>
            <h1>O título da página está mudando!</h1>
            <div>
                {/* Inserimos id nos botões e um evento de click para chamar a função de mudar o 'number'. */}
                <button id='prev' onClick={changeNumber}>Previous</button>
                <button id='next' onClick={changeNumber}>Next</button>
            </div>
        </Container>
    )
}