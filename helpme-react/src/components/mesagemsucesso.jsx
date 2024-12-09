import React from "react";

// Component Criado para a mensagem de sucesso quando enviar o email para recuperar senha
const MensagemSucesso = ({ tipo }) => {
    const mensagens = {
        recuperarSenha: "Um e-mail foi enviado para recuperação de senha!",
        cadastro: "Cadastro realizado com sucesso!",
    };

    const mensagem = mensagens[tipo] || "Operação realizada com sucesso!";

    return (
        <div className="message-success">
            <p>{mensagem}</p>
        </div>
    );
};

export default MensagemSucesso;
