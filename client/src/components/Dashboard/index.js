import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';
import LivrosDataService from "../../services/LivroService";

const Dashboard = ({ setIsAuthenticated }) => {

  
  const [livros, setLivros] = useState([]);
  const [selectedLivros, setSelectedLivros] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const retrieveLivros = () => {

    LivrosDataService.getAll()
      .then(response => {
        setLivros(response.data)
        livros = response.data
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveLivros();
  }, []);

  useState(() => {
  }, []);



  
  const handleEdit = id => {
    const [livro] = livros.filter(livro => livro.id === id);
    setSelectedLivros(livro);
    setIsEditing(true);
   
  
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      
    }, 
    LivrosDataService.remove(id)
    .then(response => {
    })
    .catch(e => {
      console.log(e);
    })).then(result => {
      if (result.value) {
        const [livro] = livros.filter(livro => livro.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${livro.nome} deletado com sucesso.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const livrosCopy = livros.filter(livro => livro.id !== id);
        localStorage.setItem('livros_data', JSON.stringify(livrosCopy));
        setLivros(livrosCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            livros={livros}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          livros={livros}
          setLivros={setLivros}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          livros={livros}
          selectedLivros={selectedLivros}
          setLivros={setLivros}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
