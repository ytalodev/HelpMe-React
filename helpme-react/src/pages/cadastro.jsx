import React, { useState } from "react";
import Header from "../components/Header";
import CadastroForm from "../components/CadastroForm";
import Message from "../components/Message";

const Cadastro = () => {
    const [message, setMessage] = useState("");

    const handleCadastro = () => {
        setMessage("Cadastro realizado com sucesso!");
        setTimeout(() => setMessage(""), 3000); // Limpa a mensagem após 3 segundos
    };

    return (
        <>
            <Header />

            <div className="container">
                <div className="form">
                    <CadastroForm onCadastro={handleCadastro} />
                    {message && <Message type="success" text={message} />}
                </div>
            </div>
        </>
    );
};

export default Cadastro;
