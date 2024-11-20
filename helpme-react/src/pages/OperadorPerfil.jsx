import React from "react";
import Header from "../components/Header";
import OperadorPerfilForm from "../components/OperadorPerfilForm";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

const OperadorPerfil = () => {
    const handleSave = () => {
        alert("Dados do operador atualizados com sucesso!");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <Link to="/opcoes" className="back-link">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <div className="form">
                    <OperadorPerfilForm onSave={handleSave} />
                </div>
            </div>
        </div>
    );
};

export default OperadorPerfil;
