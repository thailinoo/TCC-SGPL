import { Link } from "react-router-dom";
import './Sidebar.css';
import newLogo from '../../assets/images/system-logo_128_x_128.png'; 

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex justify-content-center align-items-center px-2 py-4 border-bottom">
                <img src={newLogo} alt="Novo logo" className="logo2" /> 
            </div>

            <nav className="nav flex-column">
                <Link className="nav-link" to={'/usuario'}>Usuário</Link>
                <Link className="nav-link" to={'/ambiente'}>Ambiente</Link>
                <Link className="nav-link" to={'/maquina'}>Máquina</Link>
                <Link className="nav-link" to={'/'}>Sair</Link>
            </nav>
        </div>
    );
}

export default Sidebar;
