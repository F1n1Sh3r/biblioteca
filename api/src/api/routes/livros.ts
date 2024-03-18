import { Router, Request, Response} from 'express'

import * as livrosController from '../controllers/library/books'
import {CreateLivroDTO, FilterLivrosDTO, UpdateLivroDTO} from '../dto/livro.dto'
import { isEmpty } from 'lodash'

const livrossRouter = Router()

livrossRouter.get('/:id', async (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const result = await livrosController.getById(id)
    return res.status(200).send(result)
})

livrossRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    if (isNaN(id) || isEmpty(id)) {
        return res.status(400).send('ID inválido')
    }
    const payload:UpdateLivroDTO = req.body
    
    const result = await livrosController.update(id, payload)
    return res.status(201).send(result)
})

livrossRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
        if (isNaN(id)) {
        return res.status(400).send('ID inválido')
    }
    const result = await livrosController.deleteById(id)
    return res.status(204).send({
        success: result
    })
})

livrossRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateLivroDTO = req.body

    const result = await livrosController.create(payload)
    return res.status(200).send(result)
})

livrossRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterLivrosDTO = req.query

    const results = await livrosController.getAll(filters)
    return res.status(200).send(results)
})

export default livrossRouter