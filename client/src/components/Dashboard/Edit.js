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
    
    //localStorage.setItem('livros_data', JSON.stringify(livro));

    //localStorage.setItem('livros_data', JSON.stringify(livros));
    setLivros(selectedLivros);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${livro.nome} foi atualizado.`,
      showConfirmButton: false,
      timer: 1500,
    });


  };


  const livro = {
    id,
    nome,
    autor,
    editora,
    ano,
    isbn,
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
          id="isbn"
          type="text"
          name="isbn"
          value={isbn}
          onChange={e => setIsbn(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" 
              onClick={() => {
                LivrosDataService.update(selectedLivros.id,  livro)
                const index = livros.indexOf(selectedLivros.id);
                livros.splice(index)
                livros.push(livro);
                setIsEditing(false)
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
