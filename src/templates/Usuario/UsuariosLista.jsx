import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import UsuarioService from "../../services/UsuarioService";
import { useEffect, useState } from "react";

const UsuariosLista = () => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        UsuarioService.getAllUsuarios().then(
            (response) => {
                const usuariosData = response.data;
                setUsuarios(usuariosData);
                console.log(usuariosData);
            }
        ).catch((error) => {
            console.log(error);
        });
    }, []);

    const getId = (id) => {
        navigate(`/usuarioeditar/${id}`);
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Lista de Usuários'} logo={logo} />
                <section className="m-2 p-4 shadow-lg bg-light rounded">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">RM</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Senha</th>
                                    <th scope="col">Nível Acesso</th>
                                    <th scope="col">Data Cadastro</th>
                                    <th scope="col">Status Usuário</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios?.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.rm}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.senha}</td>
                                        <td>{usuario.nivelAcesso}</td>
                                        <td>{usuario.dataCadastro}</td>
                                        <td>{usuario.statusUsuario}</td>
                                        <td>
                                            <button onClick={() => getId(usuario.id)}
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

export default UsuariosLista;
