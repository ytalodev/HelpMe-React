import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialLoginButtons from "./SocialLoginButtons";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();

    // Alternar visibilidade da senha
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Preencha todos os campos!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Digite um e-mail válido!");
            return;
        }

        // Login simulado (para ajustar as credenciais, edite aqui)
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="password">Senha:</label>
                            <div className="password-container">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="toggle-password-visibility"
                                    aria-label="Mostrar ou ocultar senha"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? "🔓" : "🔒"}
                                </span>
                            </div>
                            <p> Esqueceu a senha? <a href="/recuperar-senha">Clique aqui</a></p>
                        </div>
                    </div>
                    <SocialLoginButtons />
                    <div className="login-button">
                        <button type="submit">Entrar</button>
                    </div>
                    <div className="signup-link">
                        <p>
                            Não tem uma conta? <a href="/cadastro">Cadastre-se aqui</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
