import React, { useState } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        setMessage("Login realizado com sucesso!");
        setTimeout(() => setMessage(""), 3000); // Remove a mensagem após 3 segundos
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="form">
                    <LoginForm onLogin={handleLogin} />

                    {message && <div className="success-message">{message}</div>}
                </div>
            </div>
        </>
    );
};

export default Login;
