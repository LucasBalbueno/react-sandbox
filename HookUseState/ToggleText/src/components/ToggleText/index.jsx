import { useState } from 'react';
import { Container } from './style';

export function ToggleText () {
    const [ visibility, setVisibility ] = useState(true);
    const [ buttonText, setButtonText ] = useState('Ocultar')

    function handleButton (event) {
        setVisibility(!visibility)
        setButtonText(visibility ? 'Mostrar' : 'Ocultar')
    }

    return (
        <Container>
            <div>
                <h1 style={{ display: visibility ? 'block' : 'none' }}>Hello World!</h1>
            </div>
            <button id='btn' onClick={handleButton}>{buttonText}</button>
        </Container>
    )
}