import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export const Greeting = () => {
    const { language } = useContext(LanguageContext);

    let greeting = 'Olá!';

    if (language === 'pt') {
        greeting = 'Olá!';
    } else if (language === 'en') {
        greeting = 'Hello!';
    } else if (language === 'it') {
        greeting = 'Ciao!';
    } else if (language === 'lat') {
        greeting = 'Salve!';
    }

    return (
        <h1>{greeting}</h1>
    )
}