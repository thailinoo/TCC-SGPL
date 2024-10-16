import React, { useState } from 'react'; 
import './Ocorrencia.css';

const Ocorrencia = () => {
    const [formData, setFormData] = useState({
        ocorrencia: '',
        rm: '',
        data: '',
        periodo: 'Noturno',
        lab: '',
        andar: '',
        maquina: '',
        prioridade: 'Urgente',
        descricao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const confirmarEnvio = () => {
        const { ocorrencia, rm, data, periodo, lab, andar, maquina, descricao } = formData;

        if (!ocorrencia || !rm || !data || !periodo || !lab || !andar || !maquina || !descricao) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (window.confirm('Tem certeza que deseja enviar?')) {
            window.location.href = '/Solicitacoes'; 
        }
    };

    const getSelectClass = (priority) => {
        switch (priority) {
            case 'Emergência':
                return 'emergencia';
            case 'Urgente':
                return 'urgente';
            case 'Eletiva':
                return 'eletiva';
            default:
                return '';
        }
    };

    return (
        <div className="cont">
            <h1>NOVA OCORRÊNCIA</h1>
            <h2>
                <input 
                    type="text" 
                    name="ocorrencia" 
                    value={formData.ocorrencia} 
                    onChange={handleChange} 
                    placeholder="Nome do problema" 
                />
            </h2>
            <br/>
            <div className="det">
                <p>
                    <strong>RM Professor :</strong>
                    <input 
                        type="number" 
                        name="rm" 
                        value={formData.rm} 
                        onChange={handleChange} 
                        min="0" 
                    />
                </p>
                <br />
                <p>
                    <strong>Data :</strong>
                    <input 
                        type="date" 
                        name="data" 
                        value={formData.data} 
                        onChange={handleChange} 
                    />
                </p>
                <br />
                <p>
                    <strong>Período :</strong>
                    <select 
                        name="periodo" 
                        value={formData.periodo} 
                        onChange={handleChange}
                    >
                        <option value="Noturno">Noturno</option>
                        <option value="Matutino">Matutino</option>
                        <option value="Vespertino">Vespertino</option>
                    </select>
                </p>
                <br />
                <p>
                    <strong>Ambiente :</strong>
                    <input 
                        type="text" 
                        name="lab" 
                        value={formData.lab} 
                        onChange={handleChange} 
                    />
                    &nbsp;&nbsp;&nbsp;
                    <strong>Andar :</strong>
                    <input 
                        type="number" 
                        name="andar" 
                        value={formData.andar} 
                        onChange={handleChange} 
                        min="0" 
                    />
                    &nbsp;&nbsp;&nbsp;
                    <strong>Máquina :</strong>
                    <input 
                        type="number" 
                        name="maquina" 
                        value={formData.maquina} 
                        onChange={handleChange} 
                        min="0" 
                    />
                </p>
                <br />
                <p>
                    <strong>Prioridade :</strong>
                    <select 
                        name="prioridade" 
                        value={formData.prioridade} 
                        onChange={handleChange}
                        className={getSelectClass(formData.prioridade)} 
                    > 
                        <option value="Emergência">Emergência</option>
                        <option value="Urgente">Urgente</option>
                        <option value="Eletiva">Eletiva</option>
                    </select>
                </p>
            </div>
            <br />
            <div>
                <p><strong>Descrição do problema:</strong></p>
                <textarea 
                    name="descricao" 
                    value={formData.descricao} 
                    onChange={handleChange} 
                    rows="10" 
                    cols="90" 
                />
            </div>
            <br />
            <div>
                <button type="button" onClick={confirmarEnvio}>Enviar</button>
            </div>
        </div>
    );
};

export default Ocorrencia;
