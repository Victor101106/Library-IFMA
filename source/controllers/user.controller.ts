import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export class UserController {

    private constructor() {}

    public static create(): UserController {
        return new UserController()
    }

    async profileHandle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
        
        const requestSchema = z.object({
            query: z.object({
                picture: z.string(),
                email: z.string(),
                name: z.string()
            })
        })

        const requestParsed = requestSchema.safeParse(request)

        if (requestParsed.error)
            return reply.redirect('/')

        const { query } = requestParsed.data

        return reply.view('temporary.profile.view.html', query)

    }

}

export const userController = UserController.create()