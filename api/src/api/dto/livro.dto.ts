import { Optional } from "sequelize/types"

export type CreateLivroDTO = {
    id: number;
    nome: string;
    editora: string;
    autor: string;
    ano: string;
    isbn: string;
}

export type UpdateLivroDTO = Optional<CreateLivroDTO, 'id'>

export type FilterLivrosDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}