import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [ language, setLanguage ] = useState('pt');

    const changeLanguage = (language) => {
        setLanguage(language)
    }

    return <LanguageContext.Provider value={{language, changeLanguage}}>{children}</LanguageContext.Provider>
}