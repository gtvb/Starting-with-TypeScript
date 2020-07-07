import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
    { name: 'Gabriel', email: 'gabriel@email.com.br'},
    { name: 'Rafael', email: 'rafael@email.com.br'},
    { name: 'Pedro', email: 'pedro@email.com.br'},
    { name: 'João', email: 'joão@email.com.br'},
    { name: 'Zé', email: 'zé@email.com.br'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: { name: 'Gabriel', email: 'gabriel@email.com' },
            message: { subject: 'Learn TypeScript', body: 'Hello, you are starting to learn TypeScript :)' }
        })

        return res.send()
    }
}