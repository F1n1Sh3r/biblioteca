import {Op} from 'sequelize'
import {isEmpty} from 'lodash'

import {Livros} from '../models'
import {GetAllLivrosFilters} from './types'
import {LivrosInput, LivroOutput} from '../models/livros'

export const create = async (payload: LivrosInput): Promise<LivroOutput> => {
    const livro = await Livros.create(payload)

    return livro
}

export const findOrCreate = async (payload: LivrosInput): Promise<LivroOutput> => {
    const [livro] = await Livros.findOrCreate({
        where: {
            nome: payload.nome
        },
        defaults: payload
    })

    return livro
}

export const update = async (id: number, payload: Partial<LivrosInput>): Promise<LivroOutput> => {
    const livro = await Livros.findByPk(id)
    if (!livro) {
        // @todo throw custom error
        throw new Error('not found')
    }

    const updatedLivro = await livro.update(payload)
    return updatedLivro
}

export const getById = async (id: number): Promise<LivroOutput> => {
    const livro = await Livros.findByPk(id)
    if (!livro) {
        // @todo throw custom error
        throw new Error('not found')
    }

    return livro
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedLivroCount = await Livros.destroy({
        where: {id}
    })

    return !!deletedLivroCount
}

export const getAll = async (filters?: GetAllLivrosFilters): Promise<LivroOutput[]> => {
    return Livros.findAll({
        where: {
            ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: false})
        },
       
    })
}