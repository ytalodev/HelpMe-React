import React from "react";
import Header from "../components/Header";
import CadastroOperadorForm from "../components/CadastroOperadorForm";
import "../assets/css/style.css";

const CadastroOperador = () => {
    const handleSave = () => {
        alert("Operador cadastrado com sucesso!");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="form">
                    <CadastroOperadorForm onSave={handleSave} />
                </div>
            </div>
        </div>
    );
};

export default CadastroOperador;
