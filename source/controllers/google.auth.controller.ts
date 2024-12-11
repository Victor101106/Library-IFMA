import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { googleAuthService, GoogleAuthService } from '../services'

export class GoogleAuthController {

    private constructor(
        private readonly googleAuthService: GoogleAuthService
    ) {}

    public static create(googleAuthService: GoogleAuthService): GoogleAuthController {
        return new GoogleAuthController(googleAuthService)
    }

    async callbackHandle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {

        const requestSchema = z.object({
            body: z.object({
                credential: z.string()
            })
        })

        const requestParsed = requestSchema.safeParse(request)

        if (requestParsed.error)
            return reply.status(400).send(requestParsed.error)

        const { credential } = requestParsed.data.body

        const payloadOrError = await this.googleAuthService.verifyCredential(credential)

        if (payloadOrError.failure())
            return reply.status(400).send(payloadOrError.value)

        const payload = payloadOrError.value

        const params = new URLSearchParams()

        params.append('picture', String(payload.picture))
        params.append('email', String(payload.email))
        params.append('name', String(payload.name))

        return reply.redirect(`/profile?${params.toString()}`)
        
    }

}

export const googleAuthController = GoogleAuthController.create(googleAuthService)