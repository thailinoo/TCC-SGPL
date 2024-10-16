import React from 'react';
import './Solicitacoes.css';
import logo from './logo.png';
 
const Solicitacoes = () => {
  return (
    <div className='thaila'>
      <h1>SOLICITAÇÕES</h1>
      {[
        
        { date: "09/09/2024", description: "Falha na conexão a internet", link: "./OcDetails2", color: "verde" },
        { date: "10/09/2024", description: "Falha no compartilhamento de tela", link: "./OcorrenciaDetails", color: "vermelho" },
        { date: "11/09/2024", description: "Erro no VS Code", link: "./OcDetails3", color: "amarelo" },
        
      ].map((item, index) => (
        <div key={index} className={`card1 ${item.color}`}>
          <p><a href={item.link}>{item.date} - {item.description}</a></p>
        </div>
      ))}
    </div>
  );
};
 
export default Solicitacoes