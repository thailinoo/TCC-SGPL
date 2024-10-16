import React from 'react';
import './OcorrenciaDetails.css';

const Ocorrencia = () => {
  return (
    <div className="c">
      <h1>OCORRÊNCIA</h1>
      <h2>Falha no compartilhamento de tela #003</h2>
      <p className="rm">RM974568</p>
      <div className="d3">
        <p><strong>RM Professor :</strong> 987604</p>
        <p><strong>Data :</strong> 10/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Noturno</p>
        <p><strong>Laboratório :</strong> 1 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 009675</p>
      </div>
      <div>
        <p className="desc"><strong>Descrição do problema:</strong></p>
        <p>Não foi possível compartilhar a tela com os alunos.</p>
      </div>
    </div>
  );
};

export default Ocorrencia;
