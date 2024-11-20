import React from "react";
import Header from "../components/Header";
import ChamadoForm from "../components/ChamadoForm";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

const Chamado = () => {
    const handleSave = () => {
        alert("Chamado salvo com sucesso!");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <Link to="/opcoes" className="back-link">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <div className="form">
                    <ChamadoForm onSave={handleSave} />
                </div>
            </div>
        </div>
    );
};

export default Chamado;
