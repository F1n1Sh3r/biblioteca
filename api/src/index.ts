import { Application, Request, Response } from 'express'
import express = require('express');
import routes from './api/routes/'
import dbInit from './db/init'
const cors = require('cors');
dbInit()

const port = 9000

export const get = () => {
    const app: Application = express()

    app.use(cors());
    // Body parsing Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.get('/', async(req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({ message: `Welcome to the books API! \n Endpoints available at http://localhost:${port}/api/v1` })
    })
    
    app.use('/api/v1', routes)

    return app
}

export const start = () => {
    const app = get()
    try {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    } catch (error: any) {
        console.log(`Error occurred: ${error.message}`)
    }
}

start()