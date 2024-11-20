import React from "react";
import Header from "../components/Header";
import OperadorPerfilForm from "../components/OperadorPerfilForm";
import "../assets/css/style.css";


const OperadorPerfil = () => {
    const handleSave = () => {
        alert("Dados do operador atualizados com sucesso!");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="form">
                    <OperadorPerfilForm onSave={handleSave} />
                </div>
            </div>
        </div>
    );
};

export default OperadorPerfil;
