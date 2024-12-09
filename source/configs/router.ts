import { FastifyInstance } from 'fastify'
import { existsSync, readdirSync } from 'fs'
import { join } from 'path'

export default (instance: FastifyInstance): void => {
    
    const apiRoutesFolderPath = join(__dirname, '../routes/api/')
    const viewRoutesFolderPath = join(__dirname, '../routes/views/')

    if (!existsSync(viewRoutesFolderPath) || !existsSync(apiRoutesFolderPath))
        return

    readdirSync(apiRoutesFolderPath).forEach(file => instance.register(require(`${apiRoutesFolderPath}/${file}`), { prefix: '/api' }))
    readdirSync(viewRoutesFolderPath).forEach(file => require(`${viewRoutesFolderPath}/${file}`)(instance))

}