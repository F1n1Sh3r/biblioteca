import { conexaoBancoDeDados } from "../services/db/connect.js";
import { createCustomError } from "../middlewares/customErrors.js";
import { tryCatchWrapperr } from "../middlewares/tryCatchWrapper.js";



async function obtemUmLivro(id) {
    let sql = "SELECT * FROM livros WHERE id = ?";
    const [rows] = await conexaoBancoDeDados.query(sql, [id]);
    return rows[0];
  }


export const obtemTodosOsLivros = tryCatchWrapperr(async function (req, res, next){
    
    let consultaSQLTodosOsLivros = "SELECT * FROM livros";

    const [linhas] = await conexaoBancoDeDados.query(consultaSQLTodosOsLivros);
   
    if (!linhas.length) return res.status(204).json({ message: "Não há Livros na base de dados!" });

    return res.status(200).json({ livros: rows });
});


export const obtemUmLivrosPorId = tryCatchWrapperr(async function (req, res, next){
    
    let consultaSQLTodosOsLivros = "SELECT * FROM livros where = ?";

    const {idLivro} = req.params;

    const [linhas] = await conexaoBancoDeDados.query(consultaSQLTodosOsLivros);

    if (!linhas.length) return res.status(204).json({ message: "Livro não encontrado na base de dados!" });

    return res.status(200).json({ livros: rows });
});


