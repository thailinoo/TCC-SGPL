import React from 'react';
import './Dev2.css';

const Ocorrencia = () => {
  return (
    <div className="head2">
      <div className="brasil">
        <h1>OCORRÊNCIA</h1>
        <h2>Mouse não funciona  #006</h2>
        <p className="argentina">RM9231456</p>

        <div className="canada">
          <p><strong>RM Professor :</strong> 987604</p>
          <p><strong>Data :</strong> 11/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Vespertino</p>
          <p><strong>Laboratório :</strong> 4 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 3 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 041743</p>
        </div>

        <div>
          <p className="franca"><strong>Descrição do problema:</strong></p>
          <p>Mouse não está funcionando.</p>
        </div>
      </div>

      <div className="japao">
        <p className="resolucao"><strong>Resolução do problema:</strong></p>
        <p>Problema resolvido com sucesso! O mouse quebrado foi descartado e um novo foi colocado em seu lugar.</p>
      </div>
    </div>
  )
}

export default Ocorrencia;