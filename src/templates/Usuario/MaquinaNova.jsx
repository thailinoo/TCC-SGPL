import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import { useState, useEffect } from "react";
import MaquinaService from "../../services/MaquinaService";
import AmbienteService from "../../services/AmbienteService";

const MaquinaNova = () => {
    const [ambientes, setAmbientes] = useState([]);
    const [formData, setFormData] = useState({ patrimonio: '', nome: '', ambienteId: '' });
    const [errors, setErrors] = useState({});

    async function getAmbientes() {
        const resposta = await AmbienteService.getAllAmbiente();
        setAmbientes(resposta.data);
    }

    useEffect(() => {
        getAmbientes();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === "patrimonio") {
            if (!/^\d*$/.test(value)) {
                setErrors(prev => ({ ...prev, patrimonio: 'Patrimônio deve conter apenas números.' }));
            } else {
                setErrors(prev => ({ ...prev, patrimonio: null }));
            }
        }

        if (name === "nome") {
            if (!/^[a-zA-Z\s]*$/.test(value)) {
                setErrors(prev => ({ ...prev, nome: 'Nome deve conter apenas letras.' }));
            } else {
                setErrors(prev => ({ ...prev, nome: null }));
            }
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (errors.patrimonio || errors.nome) {
            return;
        }

        console.log(formData);
        MaquinaService.create(formData).then(dados => {
            navigate("/maquinaslista");
        });
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header title={'Nova Máquina'} />
                <section className="m-2 p-4 shadow-lg rounded bg-light">
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputPatrimonio" className="form-label">Patrimônio</label>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="patrimonio"
                                className="form-control"
                                id="inputPatrimonio"
                            />
                            {errors.patrimonio && <div className="text-danger">{errors.patrimonio}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputNome2" className="form-label">Nome</label>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="nome"
                                className="form-control"
                                id="inputNome2"
                            />
                            {errors.nome && <div className="text-danger">{errors.nome}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputambiente_id" className="form-label">Ambiente ID</label>
                            <select name="ambienteId" onChange={handleChange} className="form-select">
                                {ambientes.map(ambiente => (
                                    <option value={ambiente.id} key={ambiente.id}>
                                        {ambiente.nome}
                                    </option>
                                ))}
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
