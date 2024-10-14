import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import MaquinaService from "../../services/MaquinaService";
import { useEffect, useState } from "react";

const MaquinasLista = () => {
    const navigate = useNavigate();
    const [maquinas, setMaquinas] = useState([]);

    useEffect(() => {
        MaquinaService.getAllMaquina().then(
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
        // Implementar lógica para lidar com o ID da máquina
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Lista de Máquinas'} />
                <section className="m-2 p-4 shadow-lg rounded bg-light">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Patrimônio</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Ambiente ID</th>
                                    <th scope="col">Status Máquina</th>
                                </tr>
                            </thead>
                            <tbody>
                                {maquinas?.map((maquina) => (
                                    <tr key={maquina.id}>
                                        <td>{maquina.id}</td>
                                        <td>{maquina.patrimonio}</td>
                                        <td>{maquina.nome}</td>
                                        <td>{maquina.ambiente_id}</td>
                                        <td>{maquina.statusMaquina}</td>
                                        <td>
                                            <button onClick={() => getId(maquina.id)} className="btn" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
                                                <i className="bi bi-envelope-open"> Abrir</i>
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

export default MaquinasLista;
