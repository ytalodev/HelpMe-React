import React from "react";
import "../assets/css/style.css";
import logo from "../assets/img/help-me.png";

const Login = () => {
    return (
        <div>
            {/* Logo na parte superior */}
            <div className="form-image">
                <img src={logo} alt="HelpMe Image" />
            </div>

            {/* Container que fica os inputs */}
            <div className="container">
                <div className="form">
                    <form action="#">
                        {/* Cabeçalho do formulário */}
                        <div className="form-header">
                            <div className="title">
                                <h1>Login</h1>
                            </div>
                        </div>

                        {/* Inputs do formulário */}
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
                            <div className="input-box">
                                <label htmlFor="password">Senha:</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Digite sua senha"
                                    required
                                />
                            </div>
                        </div>

                        {/* Login com redes sociais, Google e Face */}
                        <div className="social-login">
                            <p>Acesse com:</p>
                            <div className="social-buttons">
                                <button className="google-btn">
                                    <i className="fab fa-google"></i> Acesse com Google
                                </button>
                                <button className="facebook-btn">
                                    <i className="fab fa-facebook"></i> Acesse com Facebook
                                </button>
                            </div>
                        </div>

                        {/* Botão de acessar */}
                        <div className="login-button">
                            <button>
                                <a href="/chamado">ACESSAR</a>
                            </button>
                        </div>

                        {/* Links adicionais */}
                        <div className="signup-link">
                            <p>
                                Não tem uma conta? <a href="/cadastro">Entre aqui</a>
                            </p>
                        </div>
                        <div className="signup-link">
                            <p>
                                Esqueceu a senha? <a href="/recuperar_senha">Clique aqui</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
