import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const LogoutButton = () => {

    const { logout } = useContext(AuthContext);

    return (
        <button onClick={logout}>Fazer Logout</button>
    )
}