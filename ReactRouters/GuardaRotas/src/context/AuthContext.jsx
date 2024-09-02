import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ auth, setAuth ] = useState('deslogado');

    const login = () => {
        if (auth === 'logado') {
            alert('Você já está logado!')
        } else {
            setAuth('logado')
        }
    }

    const logout = () => {
        if (auth === 'deslogado') {
            alert('Você já está deslogado!')
        } {
            setAuth('deslogado')
        }
    }

    return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>
}