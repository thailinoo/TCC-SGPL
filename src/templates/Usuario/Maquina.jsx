import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';

const Maquina = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Máquina'} />
                <section className="m-2 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">
                        <Link to={'/maquinanova'} className="btn btn-lg" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
                            Nova Máquina
                        </Link>
                        <Link to={'/maquinaslista'} className="btn btn-lg" style={{ backgroundColor: '#6c757d', color: '#ffffff' }}>
                            Lista de Máquinas
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Maquina;

