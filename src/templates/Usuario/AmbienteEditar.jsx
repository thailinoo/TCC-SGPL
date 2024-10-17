import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import { useEffect, useRef, useState } from "react"
import logo from '../../assets/images/home.png'
import AmbienteService from "../../services/AmbienteService"

const AmbienteEditar = () => {

    const objectValues = {
        id: null,
        nome: "",
        localAmbiente: "",
        statusAmbiente: ""
    };
    
    const [ambiente, setAmbiente] = useState(objectValues); 

    const { id } = useParams();
    const _dbRecords = useRef(true);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    useEffect(() => {
        AmbienteService.findById(id).then(
            (response) => {
                const ambiente = response.data;
                setAmbiente(ambiente);
                console.log(ambiente);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const inativar = () => {
        setSuccessful(false);

        AmbienteService.inativar(id).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                window.location.reload();

            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }

    const reativar = () => {
        setSuccessful(false);

        AmbienteService.reativar(id).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                window.location.reload();

            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }


    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-4 w-100">
                <Header
                    goto={'/ambiente'}
                    title={'Editar Ambiente'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3">
                        <div className="col-md-2">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputID" readOnly 
                                defaultValue={ambiente.id} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome"  
                                defaultValue={ambiente.nome} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputLocal" className="form-label">Local</label>
                            <input type="email" className="form-control" id="inputLocal"  
                                defaultValue={ambiente.localAmbiente} />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputStatus" className="form-label">Status</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly  
                                defaultValue={ambiente.statusAmbiente} />
                        </div>
                        
                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                            <button type="button" className="btn btn-warning" onClick={() => reativar()}>
                                Reativar / Resetar a Senha
                            </button>
                            <button type="button" className="btn btn-danger" onClick={() => inativar()}>
                                Inativar Conta
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default AmbienteEditar