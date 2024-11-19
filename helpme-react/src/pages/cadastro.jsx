import React from "react";
import "../assets/css/style.css";
import logo from "../assets/img/help-me.png";

const Cadastro = () => {
    return (
        <div>
            {/* Logo que fica no topo */}
            <div className="form-image">
                <img src={logo} alt="HelpMe Logo" />
            </div>

            {/* Container principal */}
            <div className="container">
                <div className="form">
                    <form action="#">
                        <div className="form-header">
                            <div className="title">
                                <h1>Cadastro</h1>
                            </div>
                        </div>

                        {/* Inputs */}
                        <div className="input-group">
                            <div className="input-box">
                                <label htmlFor="user">Usuário</label>
                                <input
                                    id="user"
                                    type="text"
                                    name="user"
                                    placeholder="Digite seu usuário"
                                    required
                                />
                            </div>

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

                            <div className="input-box">
                                <label htmlFor="confirm-password">Confirme sua senha:</label>
                                <input
                                    id="confirm-password"
                                    type="password"
                                    name="confirm-password"
                                    placeholder="Confirme sua senha"
                                    required
                                />
                            </div>
                        </div>

                        {/* Botão de cadastrar */}
                        <div className="login-button">
                            <button type="submit">CADASTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
