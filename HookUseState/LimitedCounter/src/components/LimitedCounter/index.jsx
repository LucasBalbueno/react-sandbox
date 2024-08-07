import { useState } from "react";
import { Container } from './style'

export function LimitedCounter () {
    const [count, setCount] = useState(0);
 
    function handleCount(event) {
        const buttonId = event.target.id;
        
        if (buttonId === 'prev') {
            setCount((prevCount) => prevCount - 1);
        } else if (buttonId === 'next') {
            setCount((prevCount) => prevCount + 1);
        }
    }
    
    if (count > 10 || count < -10 ) {
        alert('O limite máximo é 10!')
    }

    return (
        <Container>
            <h1>{count}</h1>
            <div>
                <button id="prev" onClick={handleCount}>Decrementar</button>
                <button id="next" onClick={handleCount}>Incrementar</button>
            </div>
        </Container>
    );
}