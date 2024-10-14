import { Link } from "react-router-dom";
import './Sidebar.css';
import logo from '../../assets/images/system-logo_128_x_128.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex justify-content-around align-items-center px-2 py-4 border-bottom rounded">
                <img src={logo} alt="logo" className="logo m-1" />
            </div>

            <nav className="nav flex-column">
                <Link className="nav-link" to={'/usuario'}>Usuário</Link>
            </nav>
            <nav className="nav flex-column">
                <Link className="nav-link" to={'/ambiente'}>Ambiente</Link>
            </nav>
            <nav className="nav flex-column">
                <Link className="nav-link" to={'/maquina'}>Máquina</Link>
            </nav>
        </div>
    );
}

export default Sidebar