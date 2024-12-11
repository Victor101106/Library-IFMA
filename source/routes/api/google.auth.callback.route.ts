import { FastifyInstance } from 'fastify'
import { googleAuthController } from '../../controllers'

module.exports = (instance: FastifyInstance) => {
    instance.post('/auth/google/callback', (request, reply) => {
        return googleAuthController.callbackHandle(request, reply)
    })
}