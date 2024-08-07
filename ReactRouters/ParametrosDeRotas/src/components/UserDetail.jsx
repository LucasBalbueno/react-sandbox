import { useParams } from 'react-router-dom'

import { Container } from './style'

export function UserDetail () {

    const { id } = useParams()

    return (
        <Container>
            <h1>Informaçoes do contato: {id}</h1>
        </Container>
    )
}