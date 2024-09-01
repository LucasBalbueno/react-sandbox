import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const UserStatus = () => {

    const { status } = useContext(AuthContext);

    return(
        <h1>O usuário está {status}</h1>
    )
}