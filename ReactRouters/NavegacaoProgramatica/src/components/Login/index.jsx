import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Login () {
    const navigate = useNavigate();
    
    const handleLogin = (event) => {
        event.preventDefault();
        
        const user = document.getElementById('userName');
        const userName = user.value;

        navigate(`/profile/${userName}`);
    }

    return (
        <div>
            <h3>Faça o seu login!</h3>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Nome de usuário</label>
                    <input id='userName' type="text" />
                </div>

                <div>
                    <label>Senha</label>
                    <input type="text" />
                </div>

                <button type='submit'>Fazer Login</button>
            </form>
        </div>
    );
};