import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe o hook de navegação
import SocialLoginButtons from "./SocialLoginButtons";

function Login() {
    const [email, setEmail] = useState(""); // Estado para armazenar o email
    const [password, setPassword] = useState(""); // Estado para armazenar a senha
    const navigate = useNavigate(); // Inicializa o hook de navegação

    // Função para tratar o login
    const handleLogin = (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário
        // Aqui você pode fazer a validação do login (autenticação)

        // Se o login for bem-sucedido, redireciona para a página de opções
        navigate("/opcoes");
    };

    return (
        <div className="container">
            <div className="form">
                <form onSubmit={handleLogin}> {/* Adiciona a função de submit */}
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
