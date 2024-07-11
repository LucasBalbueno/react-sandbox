import { useState, useEffect } from 'react'
import { Container } from './style'

export function TitleUpdater () {
    const [ number, setNumber ] = useState(1);

    useEffect(() => {
        document.title = `Contagem: ${number}`
    }, [number])

    function changeNumber (event) {
        const buttonID = event.target.id
        if (buttonID === 'prev') {
            setNumber((prevNumber) => prevNumber - 1)
        } else if (buttonID === 'next') {
            setNumber((prevNumber) => prevNumber + 1)
        }
    }

    return (
        <Container>
            <h1>O título da página está mudando!</h1>
            <div>
                <button id='prev' onClick={changeNumber}>Previous</button>
                <button id='next' onClick={changeNumber}>Next</button>
            </div>
        </Container>
    )
}