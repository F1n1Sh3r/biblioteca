import React from 'react';

const Table = ({ livros, handleEdit, handleDelete }) => {

  
  return (
    
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ano</th>
            <th>ISBN</th>
            <th colSpan={2} className="text-center">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {livros.length > 0 ? (
            livros.map((livro, i) => (
              <tr key={livro.id}>
                <td>{livro.id}</td>
                <td>{livro.nome}</td>
                <td>{livro.autor}</td>
                <td>{livro.editora}</td>
                <td>{livro.ano}</td>
                <td>{livro.isbn} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(livro.id)}
                    className="button muted-button"
                  >
                    Editar
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(livro.id)}
                    className="button muted-button"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>Sem Livros</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
