import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'; 
import Inicial from '../components/Pages/Inicial.jsx';
import Devolucoes from '../components/Pages/Devolucoes.jsx';
import Solicitacoes from '../components/Pages/Solicitacoes';
import Ocorrencia from '../components/Pages/Ocorrencia.jsx';
import OcorrenciaDetails from '../components/Pages/OcorrenciaDetails.jsx';
import OcDetails2 from '../components/Pages/OcDetails2.jsx';
import OcDetails3 from '../components/Pages/OcDetails3.jsx';
import Dev1 from '../components/Pages/Dev1.jsx';
import Dev2 from '../components/Pages/Dev2.jsx';
import Dev3 from '../components/Pages/Dev3.jsx';
import Home from "../templates/Home/Home";
import Login from "../templates/Login/Login";
import Mensagem from "../templates/Mensagem/Mensagem";
import MensagemLer from "../templates/Mensagem/MensagemLer";
import Usuario from "../templates/Usuario/Usuario";
import UsuarioEditar from "../templates/Usuario/UsuarioEditar";
import UsuarioNovo from "../templates/Usuario/UsuarioNovo";
import UsuariosLista from "../templates/Usuario/UsuariosLista";
import Maquina from "../templates/Usuario/Maquina";
import MaquinasLista from "../templates/Usuario/MaquinasLista";
import MaquinaNova from "../templates/Usuario/MaquinaNova";
import Ambiente from "../templates/Usuario/Ambiente";
import AmbienteNovo from "../templates/Usuario/AmbienteNovo";
import AmbienteLista from "../templates/Usuario/AmbienteLista";
import AmbienteEditar from "../templates/Usuario/AmbienteEditar.jsx";
import MaquinaEditar from "../templates/Usuario/MaquinaEditar.jsx";

const AppRoutes2 = () => {
  const location = useLocation();

  const noNavbarRoutes = [
    "/home",
    "/",
    "/mensagem",
    "/mensagemler",
    "/usuario",
    "/usuarioslista",
    "/usuarionovo",
    "/usuarioeditar/:id",
    "/maquina",
    "/maquinaslista",
    "/maquinanova",
    "/ambiente",
    "/ambientenovo",
    "/ambientelista"
  ];

  return (
    <div>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/Inicial" element={<Inicial />} />
        <Route path="/Devolucoes" element={<Devolucoes />} />
        <Route path="/Solicitacoes" element={<Solicitacoes />} />
        <Route path="/Ocorrencia" element={<Ocorrencia />} />
        <Route path="/OcorrenciaDetails" element={<OcorrenciaDetails />} />
        <Route path="/OcDetails2" element={<OcDetails2 />} />
        <Route path="/OcDetails3" element={<OcDetails3 />} />
        <Route path="/Dev1" element={<Dev1 />} />
        <Route path="/Dev2" element={<Dev2 />} />
        <Route path="/Dev3" element={<Dev3 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler" element={<MensagemLer />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar />} />
        <Route path="/maquina" element={<Maquina />} />
        <Route path="/maquinaslista" element={<MaquinasLista />} />
        <Route path="/maquinanova" element={<MaquinaNova />} />
        <Route path="/maquinaeditar/:id" element={<MaquinaEditar/>} />
        <Route path="/ambiente" element={<Ambiente />} />
        <Route path="/ambientenovo" element={<AmbienteNovo />} />
        <Route path="/ambientelista" element={<AmbienteLista />} />
        <Route path="/ambienteeditar/:id" element={<AmbienteEditar />} />
      </Routes>
    </div>
  );
}

export default AppRoutes2;
