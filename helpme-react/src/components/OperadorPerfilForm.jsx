import React from "react";
import Button from "./Button";

const OperadorPerfilForm = ({ onSave }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <div className="title">
                    <h1>Perfil do Operador</h1>
                </div>
            </div>

            <div className="input-group">
                <div className="input-box">
                    <label htmlFor="name">Nome:</label>
                    <input id="name" type="text" name="name" placeholder="Digite seu nome" required />
                </div>

                <div className="input-box">
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="email" name="email" placeholder="Digite seu E-mail" required />
                </div>

                <div className="input-box">
                    <label htmlFor="user">Usuário:</label>
                    <input id="user" type="text" name="user" placeholder="Digite seu usuário" required />
                </div>

                <div className="input-box">
                    <label htmlFor="perfil">Perfil:</label>
                    <input id="perfil" type="text" name="perfil" placeholder="Digite seu perfil" required />
                </div>

                <div className="input-box">
                    <label htmlFor="id">ID:</label>
                    <input id="id" type="text" name="id" placeholder="Digite seu ID" required />
                </div>

                <div className="input-box">
                    <label htmlFor="setor">Setor:</label>
                    <input id="setor" type="text" name="setor" placeholder="Digite seu setor" required />
                </div>
            </div>

            <div className="login-button">
                <Button text="Salvar" />
            </div>
        </form>
    );
};

export default OperadorPerfilForm;
