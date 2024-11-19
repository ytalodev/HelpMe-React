import React, { useState } from "react";
import "../assets/css/style.css";
import logo from "../assets/img/help-me.png";

const RecuperarSenha = () => {

    // Estado para controlar se o email foi enviado
    const [emailEnviado, setEmailEnviado] = useState(false);

    // Função que será chamada ao clicar no botão
    const handleRecuperarSenha = () => {
        // Aqui, apenas simula-se a ação de envio

        // Atualiza o estado para mostrar a mensagem
        setEmailEnviado(true);
    };

    return (
        <div>
            {/* Logo na parte superior */}
            <div className="form-image">
                <img src={logo} alt="HelpMe Image" />
            </div>

            {/* Container principal */}
            <div className="container">
                <div className="form">
                    <form action="#">
                        {/* Cabeçalho do formulário */}
                        <div className="form-header">
                            <div className="title">
                                <h1>Recuperar senha</h1>
                            </div>
                        </div>

                        {/* Input de email */}
                        <div className="input-group">
                            <div className="input-box">
                                <label htmlFor="email">E-mail:</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Digite seu E-mail"
                                    required
                                />
                            </div>
                        </div>

                        {/* Botão para enviar */}
                        <div className="login-button">
                            <button type="button" onClick={handleRecuperarSenha}>
                                ENVIAR
                            </button>
                        </div>
                    </form>

                    {/* Mensagem após enviar o e-mail */}
                    {emailEnviado && (
                        <div className="message-success">
                            <p>Um e-mail foi enviado para recuperação de senha!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecuperarSenha;
