import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export const LanguageSwitcher = () => {

    const { changeLanguage } = useContext(LanguageContext);
    
    const getValue = (event) => {
        event.preventDefault();

        const language = event.target.elements.language.value

        changeLanguage(language);
    }

    return (
        <div>
            <form onSubmit={getValue}>
                <select id="language">
                    <option value="pt">pt - Portugues</option>
                    <option value="en">en - Ingles</option>
                    <option value="it">it - Italiano</option>
                    <option value="lat">lat - Latim</option>
                </select>

                <button type="submit">Mudar Idioma</button>
            </form>
        </div>
    )
}