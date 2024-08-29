import { useParams } from "react-router-dom";

export function Profile () {

    const { user } = useParams();

    return (
        <h1>Bem vindo {user}!</h1>
    );
}