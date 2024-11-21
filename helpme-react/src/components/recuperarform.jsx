import React from "react";

// Component criado para o forms de recuperar senha
const Form = ({ onSubmit }) => {
    return (
        <div className="form">
            <form>
                <div className="form-header">
                    <div className="title">
                        <h1>Recuperar senha</h1>
                    </div>
                </div>

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

                <div className="login-button">
                    <button type="button" onClick={onSubmit}>
                        ENVIAR
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
