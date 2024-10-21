import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import { useEffect, useRef, useState } from "react";
import logo from '../../assets/images/home.png';
import MaquinaService from "../../services/MaquinaService";

const MaquinaEditar = () => {
    const objectValues = {
        id: null,
        nome: "",
        patrimonio: "",
        ambiente_id: "",
        statusAmbiente: ""
    };
    
    const [maquina, setMaquina] = useState(objectValues); 
    const { id } = useParams();
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    };

    useEffect(() => {
        MaquinaService.findById(id).then(
            (response) => {
                const maquina = response.data;
                setMaquina(maquina);
                console.log(maquina);
            }
        ).catch((error) => {
            console.log(error);
        });
    }, [id]);

    const inativar = () => {
        setSuccessful(false);

        MaquinaService.inativar(id).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                window.location.reload();
            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        );
    };

    const reativar = () => {
        setSuccessful(false);

        MaquinaService.reativar(id).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                window.location.reload();
            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        MaquinaService.alterarDados(id, formData).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                window.location.reload();
            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        );
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/maquina'}
                    title={'Editar Máquina'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-2">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputID" readOnly 
                                defaultValue={maquina.id} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" name="nome"  
                                defaultValue={maquina.nome} onChange={handleChange} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputPatrimonio" className="form-label">Patrimônio</label>
                            <input type="text" className="form-control" id="inputPatrimonio" name="patrimonio"  
                                defaultValue={maquina.patrimonio} onChange={handleChange} />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputAmbiente" className="form-label">Ambiente</label>
                            <input type="text" className="form-control" id="inputAmbiente" readOnly  
                                defaultValue={maquina.ambiente?.nome} />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputStatus" className="form-label">Status</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly  
                                defaultValue={maquina.statusMaquina} />
                        </div>
                        
                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                            <button type="button" className="btn btn-warning" onClick={reativar}>
                                Reativar / Resetar a Senha
                            </button>
                            <button type="button" className="btn btn-danger" onClick={inativar}>
                                Inativar Conta
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default MaquinaEditar;
