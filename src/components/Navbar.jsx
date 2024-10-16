import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'

const Navbar = () => {
  const navigate = useNavigate();

 

  return (
    <header className='header'>
      <a href='/' className='logo'><img src={logo} alt='Logo'></img></a>
      <nav className='navbar'>
        <a href='/Inicial'>Inicial</a>
        <a href='/Solicitacoes'>Solicitações</a>
        <a href='/Devolucoes'>Devoluções</a>
        <a href='/Ocorrencia'>Nova Ocorrência</a>
        <a href='/'>Sair</a>
      </nav>
    </header>
  );
};

export default Navbar;