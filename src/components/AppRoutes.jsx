import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Home/Home"

import ForgotPass from "../templates/Login/ForgotPass"
import Login from "../templates/Login/Login"

import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer"

import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"
import Maquina from "../templates/Usuario/Maquina"
import MaquinasLista from "../templates/Usuario/MaquinasLista"
import MaquinaNova from "../templates/Usuario/MaquinaNova"
import Ambiente from "../templates/Usuario/Ambiente"
import AmbienteNovo from "../templates/Usuario/AmbienteNovo"
import AmbienteLista from "../templates/Usuario/AmbienteLista"

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPass />} />

        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler" element={<MensagemLer />} />


        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar />} />
        <Route path="/maquina" element={<Maquina />} />
        <Route path="/maquinaslista" element={<MaquinasLista />} />
        <Route path="/maquinanova" element={<MaquinaNova />} />
        <Route path="/ambiente" element={<Ambiente />} />
        <Route path="/ambientenovo" element={<AmbienteNovo />} />
        <Route path="/ambientelista" element={<AmbienteLista />} />
      </Routes>
    </div>
  )
}
export default AppRoutes
