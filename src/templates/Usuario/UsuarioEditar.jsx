import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import { useEffect, useRef, useState } from "react"
import UsuarioService from "../../services/UsuarioService"

const UsuarioEditar = () => {

    const objectValues = {
        id: null,
        rm: "",
        nome: "",
        email: "",
        dataCadastro: "",
        nivelAcesso: "",
        statusUsuario: ""
    };

    const [usuario, setUsuario] = useState(objectValues);

    const { id } = useParams();
    console.log(id)
    const _dbRecords = useRef(true);
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUsuario(usuario => ({ ...usuario, [name]: value }));
    }

    useEffect(() => {
        UsuarioService.findById(id).then(
            (response) => {
                const usuario = response.data;
                setUsuario(usuario);
                console.log(usuario);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const inativar = () => {
        setSuccessful(false);

        UsuarioService.inativar(id).then(
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

        UsuarioService.reativar(id).then(
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

    const alterarUsuario = (e) => {
        e.preventDefault()
        setSuccessful(false);

        UsuarioService.alterarUsuario(id, usuario).then(
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
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Editar Usuário'}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3" onSubmit={alterarUsuario}>
                        <div className="col-md-2">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputID" readOnly
                                defaultValue={usuario.id} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome"
                                onChange={handleChange} name="nome" value={usuario.nome || ""} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"
                                defaultValue={usuario.email} />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputData" className="form-label">Data de Cadastro</label>
                            <input type="text" className="form-control" id="inputData" readOnly
                                defaultValue={usuario.dataCadastro} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputStatus" className="form-label">Status</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly
                                defaultValue={usuario.statusUsuario} />
                        </div>
                        <div className="col-md-4 my-3">
                            <label htmlFor="inputAcesso" className="form-label mb-1 fw-bold">Acesso:</label>
                            <select id="inputAcesso" className="form-select" readOnly disabled
                                value={usuario.nivelAcesso} >
                                <option value={'USER'}>TÉCNICO</option>
                                <option value={'ADMIN'}>ADMIN</option>
                            </select>
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

export default UsuarioEditar