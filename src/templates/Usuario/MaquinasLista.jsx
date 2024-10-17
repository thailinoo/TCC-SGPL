import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import MaquinaService from "../../services/MaquinaService";
import { useEffect, useState } from "react";

const MaquinasLista = () => {
    const navigate = useNavigate();
    const [maquinas, setMaquinas] = useState([]);

    useEffect(() => {
        MaquinaService.getAllMaquinas().then(
            (response) => {
                const maquinasData = response.data;
                setMaquinas(maquinasData);
                console.log(maquinasData);
            }
        ).catch((error) => {
            console.log(error);
        });
    }, []);

    const getId = (id) => {
        navigate(`/maquinaeditar/${id}`);
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Lista de Máquinas'} logo={logo} />
                <section className="m-2 p-4 shadow-lg bg-light rounded">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Patrimônio</th>
                                    <th scope="col">Ambiente</th>
                                    <th scope="col">Status Usuário</th>
                                </tr>
                            </thead>
                            <tbody>
                                {maquinas?.map((maquina) => (
                                    <tr key={maquina.id}>
                                        <td>{maquina.id}</td>
                                        <td>{maquina.nome}</td>
                                        <td>{maquina.patrimonio}</td>
                                        <td>{maquina.ambiente}</td>
                                        <td>{maquina.statusMaquina}</td>
                                        <td>
                                            <button onClick={() => getId(maquina.id)}
                                                className="btn btn-sm" 
                                                style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
                                                <i className="bi bi-pencil"> Editar</i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MaquinasLista