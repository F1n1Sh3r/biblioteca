import React, { useState } from 'react';
import Swal from 'sweetalert2';
import LivrosDataService from "../../services/LivroService";

const Edit = ({ livros, selectedLivros, setLivros, setIsEditing }) => {
  const id = selectedLivros.id;
  
  const [nome, setNome] = useState(selectedLivros.nome);
  const [autor, setAutor] = useState(selectedLivros.autor);
  const [editora, setEditora] = useState(selectedLivros.editora);
  const [ano, setAno] = useState(selectedLivros.ano);
  const [isbn, setIsbn] = useState(selectedLivros.isbn);

  const handleUpdate = e => {
    e.preventDefault();
   
    if (!nome || !autor || !editora || !ano || !isbn) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const livro = {
      id,
      nome,
      autor,
      editora,
      ano,
      isbn,
    };
    
    for (let i = 0; i < livros.length; i++) {
  
      if ((i + 1) === livro.length) {
        livros.splice(i, livros[i].id, livro);
        break;
      }
    }

    localStorage.setItem('livros_data', JSON.stringify(livros));
    setLivros(livros);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${livro.nome} foi atualizado.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };



  const data = {
    id: {id},
    nome: {nome},
    autor: {autor},
    editora: {editora},
    ano: livros.ano,
    isbn: livros.isbn,
  };

  const updateLivros = () => {
    var data = {
      nome: {nome}.value,
      autor:selectedLivros.autor,
      editora:selectedLivros.editora,
      ano:selectedLivros.ano,
      isbn:selectedLivros.isbn,
    };

    LivrosDataService.update(selectedLivros.id, {id})
      .then(response => {
        setLivros({ ...selectedLivros});
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Editar Livros</h1>
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
          id="ISBN"
          type="text"
          name="ISBN"
          value={isbn}
          onChange={e => setIsbn(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" 
          onClick={() => {
              updateLivros();
          }}
          />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => {
              setIsEditing(false);
            }}
            
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
