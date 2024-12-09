import React, { useState } from "react";
import Header from "../components/Header";
import Form from "../components/recuperarform";
import MensagemSucesso from "../components/mesagemsucesso";
import { Link } from "react-router-dom";
import "../assets/css/style.css";


const RecuperarSenha = () => {
    const [emailEnviado, setEmailEnviado] = useState(false);

    // Função para lidar com o envio do formulário
    const handleRecuperarSenha = () => {
        setEmailEnviado(true);
    };

    return (
        <div>
            <Header />
            <div className="container">
                <Link to="/" className="back-link">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <Form onSubmit={handleRecuperarSenha} />
                {emailEnviado && <MensagemSucesso tipo="recuperarSenha"/>}
            </div>
        </div>
    );
};

export default RecuperarSenha;
