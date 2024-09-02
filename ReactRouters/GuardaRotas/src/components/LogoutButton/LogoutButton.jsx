import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function LogoutButton () {

    const { logout } = useContext(AuthContext);

    return (
        <button onClick={logout}>Fazer Logout</button>
    )
}