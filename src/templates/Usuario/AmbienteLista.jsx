import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import AmbienteService from "../../services/AmbienteService"; 
import { useEffect, useState } from "react";

const AmbienteLista = () => {
    const navigate = useNavigate();
    const [ambientes, setAmbientes] = useState([]);

    useEffect(() => {
        AmbienteService.getAllAmbiente().then(
            (response) => {
                const ambientesData = response.data;
                setAmbientes(ambientesData);
                console.log(ambientesData);
            }
        ).catch((error) => {
            console.log(error);
        });
    }, []);

    const getId = (id) => {
        navigate(`/ambientedetalhes/${id}`);
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Lista de Ambientes'} />
                <section className="m-2 p-4 shadow-lg bg-light rounded">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Local Ambiente</th>
                                    <th scope="col">Status Ambiente</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ambientes?.map((ambiente) => (
                                    <tr key={ambiente.id}>
                                        <td>{ambiente.nome}</td>
                                        <td>{ambiente.local}</td>
                                        <td>{ambiente.status}</td>
                                        <td>
                                            <button onClick={() => getId(ambiente.id)} className="btn btn-sm" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
                                                <i className="bi bi-eye"> Abrir</i>
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

export default AmbienteLista;
