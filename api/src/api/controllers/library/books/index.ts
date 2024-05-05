import * as service from '../../../../db/services/livroService'

import {CreateLivroDTO, FilterLivrosDTO, UpdateLivroDTO} from '../../../dto/livro.dto'
import {Livro} from '../../../interfaces'
import * as mapper from './mapper'

export const create = async(payload: CreateLivroDTO): Promise<Livro> => {
    return mapper.toLivros(await service.create(payload))
}

export const update = async (id: number, payload: UpdateLivroDTO): Promise<Livro> => {
    return mapper.toLivros(await service.update(id, payload))
}

export const getById = async (id: number): Promise<Livro> => {
    return mapper.toLivros(await service.getById(id))
}

export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}

export const getAll = async(filters: FilterLivrosDTO): Promise<Livro[]> => {
    return (await service.getAll(filters)).map(mapper.toLivros)
}
