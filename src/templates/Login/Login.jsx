import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './logo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const regex = /^RM\d+$/; 
        if (!regex.test(username)) {
            setError('O username deve começar com "RM" seguido apenas por números.');
            return;
        }

        const numberPart = username.slice(2);

       
        if (numberPart.startsWith('9')) {
            navigate('/ambiente'); 
        } else if (numberPart.startsWith('8')) {
            navigate('/usuario'); 
        } else {
            setError('Username não reconhecido.');
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            setPassword(value);
            setError(''); 
        }
    };

    return (
        <div className="custom-background">
            <div className="login-container">
                <div className="login-card">
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="Logo da Empresa" />
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="RM do Usuário"
                            required
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setError('');
                            }}
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <input
                            type="password" 
                            name="password"
                            placeholder="Senha"
                            required
                            value={password}
                            onChange={handlePasswordChange} 
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

