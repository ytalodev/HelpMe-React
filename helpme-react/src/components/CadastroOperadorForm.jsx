import React from "react";
import Button from "./Button";

const CadastroOperadorForm = ({ onSave }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <div className="title">
                    <h1>Cadastro Operador</h1>
                </div>
            </div>

            <div className="input-group">
                <div className="input-box">
                    <label htmlFor="name">Nome:</label>
                    <input id="name" type="text" name="name" placeholder="Digite seu nome" required />
                </div>

                <div className="input-box">
                    <label htmlFor="setor">Setor:</label>
                    <input id="setor" type="text" name="setor" placeholder="Digite seu setor" required />
                </div>

            </div>

            <div className="login-button">
                <Button text="Cadastrar" />
            </div>
        </form>
    );
};

export default CadastroOperadorForm;
