import { FastifyInstance } from 'fastify'
import { userController } from '../../controllers'

module.exports = (instance: FastifyInstance) => {
    instance.get('/profile', async (request, reply) => {
        return userController.profileHandle(request, reply)
    })
}