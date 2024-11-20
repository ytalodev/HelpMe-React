import React from "react";

// Componente criado para menssagem
const Message = ({ type, text }) => {
    return <div className={`message ${type}`}>{text}</div>;
};

export default Message;
