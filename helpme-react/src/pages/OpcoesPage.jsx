import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const OpcoesPage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="header">
                        <h1>Selecione uma opção:</h1>
                        <Link to="/">
                            <button className="logout-button">Logout</button>
                        </Link>
                    </div>
                    <div className="button-container">
                        <div className="button-row">
                            <Link to="/chamado">
                                <button className="option-button option-chamado">Abrir Chamado</button>
                            </Link>
                            <Link to="/cadastro-operador">
                                <button className="option-button option-cadastro">Cadastrar Operador</button>
                            </Link>
                        </div>
                        <div className="button-row">
                            <Link to="/perfil-operador">
                                <button className="option-button option-perfil">Perfil do Operador</button>
                            </Link>
                            <Link to="/tabela-chamados">
                                <button className="option-button option-tabela">Tabela de Chamados</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OpcoesPage;
