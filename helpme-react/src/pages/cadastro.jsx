import React, { useState } from "react";
import Header from "../components/Header";
import CadastroForm from "../components/CadastroForm";
import MensagemSucesso from "../components/mesagemsucesso";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const Cadastro = () => {
    const [message, setMessage] = useState(false);

    const handleCadastro = () => {
        setTimeout(() => setMessage(true), 3000); 
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="form">
                    <Link to="/" className="back-link">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    <CadastroForm onCadastro={handleCadastro} />
                    {message && <MensagemSucesso tipo="cadastro" />}
                </div>
            </div>
        </>
    );
};

export default Cadastro;
