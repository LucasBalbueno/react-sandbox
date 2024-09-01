import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function ThemeButton () {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>Trocar Tema</button>
    )
}