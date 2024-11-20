import React from "react";
import Header from "../components/Header";
import ChamadoForm from "../components/ChamadoForm";
import "../assets/css/style.css";

const Chamado = () => {
    const handleSave = () => {
        alert("Chamado salvo com sucesso!");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="form">
                    <ChamadoForm onSave={handleSave} />
                </div>
            </div>
        </div>
    );
};

export default Chamado;
