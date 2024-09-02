import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function LoginButton () {

    const { login } = useContext(AuthContext);

    return(
        <button onClick={login}>Fazer Login</button>
    )
}