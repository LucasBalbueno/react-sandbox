import { useNavigate } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();

    const conferirLogin = (event) => {
        event.preventDefault();

        const formLogin = event.target;
        const userName = formLogin.querySelector('input[name="userName"]').value;
        const password = formLogin.querySelector('input[name="password"]').value;

        if (userName === 'admin@' && password === '54321') {
            navigate('/protectedroute');
        } else {
            alert('Seu login está incorreto!');
            navigate('/');
        }
    };

    return (
        <>
            <form id="formLogin" onSubmit={conferirLogin}>
                <div>
                    <label>User:</label>
                    <p>admin@</p>
                    <input name="userName" type="text" />
                </div>
                <br />
                <div>
                    <label>Senha:</label>
                    <p>54321</p>
                    <input name="password" type="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
}