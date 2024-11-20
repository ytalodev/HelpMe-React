import React from "react";
import Header from "../components/Header";
import CadastroOperadorForm from "../components/CadastroOperadorForm";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
const CadastroOperador = () => {
    const handleSave = () => {
        alert("Operador cadastrado com sucesso!");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <Link to="/opcoes" className="back-link">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <div className="form">
                    <CadastroOperadorForm onSave={handleSave} />
                </div>
            </div>
        </div>
    );
};

export default CadastroOperador;
