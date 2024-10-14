import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';

const AmbienteNovo = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Novo Ambiente'} />
                <section className="m-2 p-4 shadow-lg bg-light rounded">
                    <form className="row g-3">
                        <div className="col-md-5">
                            <label htmlFor="inputId" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputId" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputLocal" className="form-label">Local Ambiente</label>
                            <input type="text" className="form-control" id="inputLocal" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputStatus" className="form-label">Status Ambiente</label>
                            <select id="inputStatus" className="form-select">
                                <option value="Ativo" selected>Ativo</option>
                                <option value="Inativo">Inativo</option>
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
};

export default AmbienteNovo;
