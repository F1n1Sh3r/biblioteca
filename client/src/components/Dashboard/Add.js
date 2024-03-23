import React, { useState } from 'react';
import Swal from 'sweetalert2';
import LivrosDataService from "../../services/LivroService";
const Add = ({ livros, setLivros, setIsAdding }) => {

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [ano, setAno] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!nome || !autor || !editora || !ano || !isbn) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = livros.length + 1;
    const newLlivro = {
      id,
      nome,
      autor,
      editora,
      ano,
      isbn,
    };

    LivrosDataService.create(newLlivro)
    .then(response => {
    })
    .catch(e => {
      console.log(e);
    });

    livros.push(newLlivro);
    localStorage.setItem('livros_data', JSON.stringify(livros));
    setLivros(livros);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${nome} adicionado com sucesso.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Adicionar Livro</h1>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <label htmlFor="autor">Autor</label>
        <input
          id="autor"
          type="text"
          name="autor"
          value={autor}
          onChange={e => setAutor(e.target.value)}
        />
        <label htmlFor="editora">Editora</label>
        <input
          id="editora"
          type="text"
          name="editora"
          value={editora}
          onChange={e => setEditora(e.target.value)}
        />
        <label htmlFor="ano">Ano</label>
        <input
          id="ano"
          type="text"
          name="ano"
          value={ano}
          onChange={e => setAno(e.target.value)}
        />
        <label htmlFor="isbn">ISBN</label>
        <input
          id="isbn"
          type="text"
          name="isbn"
          value={isbn}
          onChange={e => setIsbn(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
