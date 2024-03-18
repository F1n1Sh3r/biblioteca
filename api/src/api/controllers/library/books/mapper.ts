import {Livro} from '../../../interfaces/'
import {LivroOutput} from '../../../../db/models/livros'

export const toLivros = (livro: LivroOutput): Livro => {
    return {
        id: livro.id,
        nome: livro.nome,
        autor: livro.autor,
        editora: livro.editora,
        ano: livro.ano,
        isbn: livro.isbn
    }
}