import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import { useState } from "react";
import MaquinaService from "../../services/MaquinaService";

const MaquinaNova = () => {
    const [formData, setFormData] = useState({ nivelAcesso: "Professor", statusUsuario: "ATIVO" })
    const handleChange = (e) => {
        setFormData(formData => ({...formData, [e.target.name]: e.target.value}))
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        MaquinaService.create(formData).then(dados => {
            navigate("/maquinalista")
        })
    }
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Nova Máquina'} />
                <section className="m-2 p-4 shadow-lg rounded bg-light">
                    <form onSubmit={handleSubmit} className="row g-3">
                        {/* <div  className="col-md-6">
                            <label htmlFor="inputId2" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputId2" />
                        </div> */}
                        <div className="col-md-6">
                            <label htmlFor="inputPatrimonio" className="form-label">Patrimônio</label>
                            <input type="text" onChange={handleChange} name="patrimonio" className="form-control" id="inputPatrimonio" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputNome2" className="form-label">Nome</label>
                            <input type="text"  onChange={handleChange} name="nome" className="form-control" id="inputNome2" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputambiente_id" className="form-label">Ambiente ID</label>
                            <input type="text"  onChange={handleChange} name="ambiente" className="form-control" id="inputambiente_id" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputAcesso" className="form-label">Status Máquina</label>
                            <select id="inputAcesso"   onChange={handleChange} name="statusMaquina" className="form-select">
                                <option value="Ativa" selected>Ativa</option>
                                <option value="Inativa">Inativa</option>
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

export default MaquinaNova;

