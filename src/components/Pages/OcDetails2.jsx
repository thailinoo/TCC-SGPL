import React from 'react'
import './OcDetails2.css'

const Ocorrencia = () => {
  return (
    <div className="a">
      <h1 >OCORRÊNCIA</h1>
      <h2 >Falha na conexão a internet #003</h2> 
      <p className="d">RM98334</p> 
      <div className="e">
        <p><strong>RM Professor :</strong> 987604</p>
        <p><strong>Data :</strong> /09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Matutino</p> 
        <p><strong>Laboratório :</strong> 3 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 4 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 004563</p> 
      </div>
      <div>
        <p className="g"><strong>Descrição do problema:</strong></p>
        <p>O aluno não conseguiu se conectar à internet.</p> 
      </div>
    </div>
  )
}

export default Ocorrencia;
