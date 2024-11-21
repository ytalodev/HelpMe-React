import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialLoginButtons from "./SocialLoginButtons";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Função para o login
    const handleLogin = (e) => {
        e.preventDefault();

        // Validação básica para o front, sem o back
        if (!email || !password) {
            alert("Preencha todos os campos!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Digite um e-mail válido!");
            return;
        }

        // Aqui é se o login for válido, se quiser alterar o login e senha, mude aqui.
        if (email === "teste@exemplo.com" && password === "123456") {
            alert("Login bem-sucedido!");
            navigate("/opcoes");
        } else {
            alert("E-mail ou senha incorretos!");
        }
    };

    return (
        <div className="container">
            <div className="form">
                <form onSubmit={handleLogin}>
                    <div className="form-header">
                        <div className="title">
                            <h1>Login</h1>
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="password">Senha:</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Digite sua senha"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <SocialLoginButtons />
                    <div className="login-button">
                        <button type="submit">Entrar</button>
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
            </div>
        </div>
    );
}

export default Login;
