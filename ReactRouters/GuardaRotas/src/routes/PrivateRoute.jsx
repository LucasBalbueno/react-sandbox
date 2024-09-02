import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function PrivateRoute () {
    const { auth } = useContext(AuthContext);

    return (
        <>
            <Link to={auth === 'logado' ? '/infos' : '/'}>Infos</Link>
            <Link to={auth === 'logado' ? '/profile' : '/'}>Profile</Link>
        </>
    )
}