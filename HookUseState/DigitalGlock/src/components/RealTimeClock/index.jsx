import { useState, useEffect } from "react"

import { Container } from './style'

export function RealTimeClock () {
    const getTime = () => {
        const data = new Date();
        const hours = data.getHours().toString().padStart(2, '0');
        const minutes = data.getMinutes().toString().padStart(2, '0');
        const seconds = data.getSeconds().toString().padStart(2, '0');

        return (`${hours}:${minutes}:${seconds}`)
    }

    const [ time, setTime ] = useState(getTime());

    useEffect(() => {
        const oneSecond = setInterval(() => {
            setTime(getTime())
        }, 1000)

        return () => clearInterval(oneSecond)
    }, [])

    return (
        <Container>
            <h1>{time}</h1>
        </Container>
    )
}