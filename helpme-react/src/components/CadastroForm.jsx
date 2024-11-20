import React from "react";
import Button from "./Button";

const CadastroForm = ({ onCadastro }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onCadastro();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <div className="title">
                    <h1>Cadastro</h1>
                </div>
            </div>

            <div className="input-group">
                <div className="input-box">
                    <label htmlFor="user">Usuário</label>
                    <input id="user" type="text" name="user" placeholder="Digite seu usuário" required />
                </div>

                <div className="input-box">
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="email" name="email" placeholder="Digite seu E-mail" required />
                </div>

                <div className="input-box">
                    <label htmlFor="password">Senha:</label>
                    <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
                </div>

                <div className="input-box">
                    <label htmlFor="confirm-password">Confirme sua senha:</label>
                    <input id="confirm-password" type="password" name="confirm-password" placeholder="Confirme sua senha" required />
                </div>
            </div>

            <div className="login-button">
                <Button text="Cadastrar" />
            </div>
        </form>
    );
};

export default CadastroForm;
