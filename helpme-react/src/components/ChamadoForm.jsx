import React from "react";
import Button from "./Button";

const ChamadoForm = ({ onSave }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <div className="title">
                    <h1>Chamado</h1>
                </div>
            </div>

            <div className="input-group">
                <div className="input-box">
                    <label htmlFor="user">Nome:</label>
                    <input id="user" type="text" name="user" placeholder="Digite seu nome" required />
                </div>

                {/* <div className="input-box">
                    <label htmlFor="setor">Setor:</label>
                    <input id="setor" type="text" name="setor" placeholder="Digite seu setor" required />
                </div> */}

                <div className="input-box">
                    <label htmlFor="responsavel">Responsável:</label>
                    <input
                        id="responsavel"
                        type="text"
                        name="responsavel"
                        placeholder="Digite o responsável técnico"
                        required
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        placeholder="Digite a descrição"
                        required
                    ></textarea>
                </div>
            </div>

            <div className="login-button">
                <Button text="Salvar" />
            </div>
        </form>
    );
};

export default ChamadoForm;
