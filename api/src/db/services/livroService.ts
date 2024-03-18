import {kebabCase} from 'lodash'

import * as livroDal from '../dal/livros'
import {GetAllLivrosFilters} from '../dal/types'
import {LivrosInput, LivroOutput} from '../models/livros'

export const create = async (payload: LivrosInput): Promise<LivroOutput> => {
    let slug = kebabCase(payload.nome)
    
    return livroDal.create(payload)
}

export const update = async (id: number, payload: Partial<LivrosInput>): Promise<LivroOutput> => {
    
    return livroDal.update(id, payload)
}

export const getById = (id: number): Promise<LivroOutput> => {
    return livroDal.getById(id)
}

export const deleteById = (id: number): Promise<boolean> => {
    return livroDal.deleteById(id)
}

export const getAll = (filters: GetAllLivrosFilters): Promise<LivroOutput[]> => {
    return livroDal.getAll(filters)
}