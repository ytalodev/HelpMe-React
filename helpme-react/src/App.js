import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OpcoesPage from "./pages/OpcoesPage";
import CadastroOperador from "./pages/CadastroOperador";
import Chamado from "./pages/chamado";
import PerfilOperador from "./pages/OperadorPerfil";
import TabelaChamados from "./pages/TabelaChamados";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import RecuperarSenha from "./pages/recuperar-senha";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/opcoes" element={<OpcoesPage />} />
        <Route path="/cadastro-operador" element={<CadastroOperador />} />
        <Route path="/chamado" element={<Chamado />} />
        <Route path="/perfil-operador" element={<PerfilOperador />} />
        <Route path="/tabela-chamados" element={<TabelaChamados />} />
      </Routes>
    </Router>
  );
}

export default App;
