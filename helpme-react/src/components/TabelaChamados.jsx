import React from "react";
import Button from "./Button";

const TabelaChamados = ({ chamados }) => {
    const handleEdit = (id) => {
        alert(`Editando chamado com ID: ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Deletando chamado com ID: ${id}`);
    };

    return (
        <div>
            <h1>Tabela de Chamados</h1>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Meio Preferido</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {chamados.map((chamado, index) => (
                        <tr key={index}>
                            <td>{chamado.nome}</td>
                            <td>{chamado.email}</td>
                            <td>{chamado.meioPreferido}</td>
                            <td>{chamado.telefone}</td>
                            <td>
                                <Button
                                    text="Editar"
                                    onClick={() => handleEdit(chamado.id)}
                                    className="btn-editar"
                                />
                                <Button
                                    text="Deletar"
                                    onClick={() => handleDelete(chamado.id)}
                                    className="btn-deletar"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaChamados;
