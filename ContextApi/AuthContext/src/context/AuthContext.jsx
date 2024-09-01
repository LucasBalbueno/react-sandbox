import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ status, setStatus ] = useState('deslogado');

    const login = () => {
        if (status === 'logado') {
            alert('Você já está logado!')
        } else {
            setStatus('logado');
        }
    }

    const logout = () => {
        if (status === 'deslogado') {
            alert('Você já está deslogado!')
        } else {
            setStatus('deslogado')
        }

    }
    
    return <AuthContext.Provider value={{status, login, logout}}>{children}</AuthContext.Provider>
}