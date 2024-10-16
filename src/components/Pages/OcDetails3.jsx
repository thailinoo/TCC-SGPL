import React from 'react';
import './OcDetails3.css'; 

const Ocorrencia = () => {
  return (
    <div className="x"> 
      <h1>OCORRÊNCIA</h1>  
      <h2>Erro no VS Code #003</h2>
      <p className="a1">RM923482</p> 
      <div className="b1">
        <p><strong>RM Professor :</strong> 92338</p>
        <p><strong>Data :</strong> 1/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Vespertino</p>
        <p><strong>Laboratório :</strong> 3 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 3 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 005643</p>
      </div>
      <div>
        <p className="c1"><strong>Descrição do problema:</strong></p>  
        <p>Não foi possível abrir o VS Code.</p>
      </div>
    </div>
  );
}

export default Ocorrencia;
