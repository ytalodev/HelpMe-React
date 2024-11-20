import React from "react";
import SocialLoginButtons from "./SocialLoginButtons";

const LoginForm = ({ onLogin }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <div className="title">
                    <h1>Login</h1>
                </div>
            </div>

            <div className="input-group">
                <div className="input-box">
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="email" name="email" placeholder="Digite seu E-mail" required />
                </div>
                <div className="input-box">
                    <label htmlFor="password">Senha:</label>
                    <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
                </div>
            </div>
            <SocialLoginButtons />
            <div className="login-button">
                <button type="submit">ACESSAR</button>
            </div>
            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href="/cadastro">Entre aqui</a>
                </p>
                <p>
                    Esqueceu a senha? <a href="/recuperar-senha">Clique aqui</a>
                </p>
            </div>


        </form>
    );
};

export default LoginForm;
