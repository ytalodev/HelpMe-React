import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Adicione essa importação
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "../assets/css/style.css";

const Login = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // Use o hook de navegação

    const handleLogin = () => {
        setMessage("Login realizado com sucesso!");
        setTimeout(() => setMessage(""), 3000); // Remove a mensagem após 3 segundos
        navigate("/opcoes"); // Redireciona para a página de opções após o login
    };

    return (
        <>
            <Header />
            <div className="form">
                <LoginForm onLogin={handleLogin} />
                {message && <div className="success-message">{message}</div>}
            </div>
        </>
    );
};

export default Login;
