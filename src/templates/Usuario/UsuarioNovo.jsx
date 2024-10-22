import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import { useState } from "react";
import UsuarioService from "../../services/UsuarioService";

const UsuarioNovo = () => {
    const [formData, setFormData] = useState({ nivelAcesso: "Professor", statusUsuario: "ATIVO" })
    const handleChange = (e) => {
        setFormData(formData => ({...formData, [e.target.name]: e.target.value}))
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        UsuarioService.create(formData).then(dados => {
            navigate("/usuarioslista")
        })
    }
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Novo Usuário'} logo={logo} />
                <section className="m-2 p-4 shadow-lg rounded bg-light">
                    <form onSubmit={handleSubmit} className="row g-3">
                        {/* <div className="col-md-5">
                            <label htmlFor="inputId" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputId" />
                        </div> */}
                        <div className="col-md-5">
                            <label htmlFor="inputRM" className="form-label">RM</label>
                            <input type="text" onChange={handleChange} name="rm" className="form-control" id="inputRM" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" onChange={handleChange} name="nome" className="form-control" id="inputNome" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" onChange={handleChange} name="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputSenha" className="form-label">Senha</label>
                            <input type="password" onChange={handleChange} name="senha" className="form-control" id="inputSenha" />
                        </div>
                        {/* <div className="col-md-5">
                            <label htmlFor="inputdataCadastro" className="form-label">Data Cadastro</label>
                            <input type="date" onChange={handleChange} name="" className="form-control" id="inputdataCadastro" />
                        </div> */}
                        <div className="col-md-5">
                            <label htmlFor="inputstatusUsuario" className="form-label">Status Usuário</label>
                            <select id="inputstatusUsuario" onChange={handleChange} name="statusUsuario" className="form-select">
                                <option value="ATIVO" selected>ATIVO</option>
                                <option value="INATIVO">INATIVO</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputAcesso" className="form-label">Nível Acesso</label>
                            <select id="inputAcesso"  onChange={handleChange} name="nivelAcesso" className="form-select">
                                <option value="Professor" selected>PROFESSOR</option>
                                <option value="Técnico">TÉCNICO</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn" style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default UsuarioNovo;
