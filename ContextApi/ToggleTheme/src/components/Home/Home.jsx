import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { ThemeButton } from "../ThemeButton/ThemeButton"

export function Home () {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <h1>O tema atual é: {theme}</h1>
            <ThemeButton />
        </>
    )
}