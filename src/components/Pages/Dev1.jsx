import React from 'react';
import './Dev1.css';

const Ocorrencia = () => {
  return (
    <div className="head1">
      <div className="ana">
        <h1>OCORRÊNCIA</h1>
        <h2>Problemas com autenticação #005</h2>
        <p className="dan">RM974568</p>

        <div className="eve">
          <p><strong>RM Professor :</strong> 987604</p>
          <p><strong>Data :</strong> 11/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Vespertino</p>
          <p><strong>Laboratório :</strong> 4 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 3 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 041743</p>
        </div>

        <div>
          <p className="fin"><strong>Descrição do problema:</strong></p>
          <p>Aluno não conseguiu realizar o login na sua conta da escola.</p>
        </div>
      </div>

      <div className="guy">
        <p className="hen"><strong>Resolução do problema:</strong></p>
        <p>Redefinição da senha de login no sistema.</p>
      </div>
    </div>
  );
};

export default Ocorrencia;
