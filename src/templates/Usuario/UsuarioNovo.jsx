import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';

const UsuarioNovo = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Novo Usuário'} logo={logo} />
                <section className="m-2 p-4 shadow-lg rounded bg-light">
                    <form className="row g-3">
                        <div className="col-md-5">
                            <label htmlFor="inputId" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputId" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputRM" className="form-label">RM</label>
                            <input type="text" className="form-control" id="inputRM" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputSenha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="inputSenha" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputdataCadastro" className="form-label">Data Cadastro</label>
                            <input type="date" className="form-control" id="inputdataCadastro" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputstatusUsuario" className="form-label">Status Usuário</label>
                            <select id="inputstatusUsuario" className="form-select">
                                <option value="Ativo" selected>Ativo</option>
                                <option value="Inativo">Inativo</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputAcesso" className="form-label">Nível Acesso</label>
                            <select id="inputAcesso" className="form-select">
                                <option value="Professor" selected>Professor</option>
                                <option value="Técnico">Técnico</option>
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
