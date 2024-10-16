import React from 'react';
import './Dev3.css'; 

const Ocorrencia = () => {
    return (
        <div className="head3">
            <div className="comoros">
                <h1>OCORRÊNCIA</h1>
                <h2>Problemas com a fonte de alimentação  #007</h2>
                <p className="tuvalu">RM996045</p>

                <div className="svalbard">
                    <p><strong>RM Professor :</strong> 987364</p>
                    <p><strong>Data :</strong> 12/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Matutino</p>
                    <p><strong>Laboratório :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 042183</p>
                </div>

                <div>
                    <p className="nauru"><strong>Descrição do problema:</strong></p>
                    <p>Aluno ao tentar ligar o computador, o mesmo não ligou.</p>
                </div>
            </div>

            <div className="micronesia">
                <p className="resolucao"><strong>Resolução do problema:</strong></p>
                <p>Trocamos a fonte de alimentação da máquina.</p>
            </div>
        </div>
    );
}

export default Ocorrencia;
