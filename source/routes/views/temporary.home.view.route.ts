import { FastifyInstance } from 'fastify'
import { environment } from '../../configs'

module.exports = (instance: FastifyInstance) => {
    instance.get('/', async (request, reply) => {
        return reply.view('temporary.home.view.html', {
            GOOGLE_REDIRECT_URI: environment.GOOGLE_REDIRECT_URI,
            GOOGLE_CLIENT_ID: environment.GOOGLE_CLIENT_ID
        })
    })
}