import React from "react";
import Header from "../components/Header";
import TabelaChamados from "../components/TabelaChamados";
import "../assets/css/style.css";
import { Link } from "react-router-dom";


const chamadosData = [
    {
        id: 1,
        nome: "Alan Silva",
        email: "Alan@email.com",
        meioPreferido: "Email",
        telefone: "(82) 99999-9999",
    },
    {
        id: 2,
        nome: "João Silva",
        email: "joao@email.com",
        meioPreferido: "Telefone",
        telefone: "(82) 99999-9999",
    },

];

const TabelaChamadosPage = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Link to="/opcoes" className="back-link">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <TabelaChamados chamados={chamadosData} />
            </div>
        </div>
    );
};

export default TabelaChamadosPage;
