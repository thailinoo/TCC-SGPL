import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './logo.png';
import UsuarioService from '../../services/UsuarioService';

const Login = () => {
    const [rm, setRm] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const regex = /^RM\d+$/;
        if (!regex.test(rm)) {
            setError('O rm deve começar com "RM" seguido apenas por números.');
            return;
        }

        //const numberPart = rm.slice(2);


        if (numberPart.startsWith('9')) {
            navigate('/Inicial');
        } else if (numberPart.startsWith('8')) {
            navigate('/usuario');
        } else {
            setError('Rm não reconhecido.');
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            setPassword(value);
            setError('');
        }
    };


    const goto = () => {
        navigate("/home");
    }

    const backto = () => {
        navigate("/");
    }

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    const editar = (id) => {
        navigate(`/usuarioeditar/` + id)
    }

    const handleSubmiti = (e) => {
        e.preventDefault();
        setMessage("");

        UsuarioService.signin(formData.rm, formData.password).then(
            () => {
                const userJson = localStorage.getItem("user");
                const user = JSON.parse(userJson || '{}');
                if (user.statusUsuario == 'ATIVO') {
                    if (user.nivelAcesso == "ADMIN") {
                        navigate("/usuario");
                    }
                    else {
                        navigate('/Inicial');
                    }
                  
                } else if (user.statusUsuario == 'TROCAR_SENHA') {
                    navigate(`/newpass/` + user.id);
                    //window.location.reload(); ordnael@email.com.br
                }

            },
            (error) => {
                const respMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(respMessage);
            }

        );
    };


    return (
        <div className="custom-background">
            <div className="login-container">
                <div className="login-card">
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="Logo da Empresa" />
                    </div>
                    <form className="login-form" onSubmit={handleSubmiti}>
                        <input
                            type="text"
                            name="rm"
                            placeholder="RM do Usuário"
                            required
                            value={formData.rm || ""}
                            onChange={handleChange}
                            /*
                            onChange={(e) => {
                                setRm(e.target.value);
                                setError('');
                            }}*/
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <input
                            type="password"
                            name="password"
                            placeholder="Senha"
                            required
                            value={formData.password || ""}
                            onChange={handleChange}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

