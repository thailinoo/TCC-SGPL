import React from 'react';
import './Devolucoes.css';
import logo from './logo.png';
 
const Devolucoes = () => {
  return (
    <div className='maria'>
      <h1>DEVOLUÇÕES</h1>
      {[

        { date: "11/09/2024", description: "Problemas com autenticação", link: "./Dev1", color: "vermelho" },
        { date: "11/09/2024", description: "Mouse não funciona", link: "./Dev2", color: "verde" },
        { date: "12/09/2024", description: "Problemas com a fonte de alimentação", link: "./Dev3", color: "vermelho" },
 
      ].map((item, index) => (
        <div key={index} className={`card3 ${item.color}`}>
          <p><a href={item.link}>{item.date} - {item.description}</a></p>
        </div>
      ))}
    </div>
  );
};
 
export default Devolucoes