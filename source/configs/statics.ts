import FastifyStatic from '@fastify/static'
import { FastifyInstance } from 'fastify'
import path from 'path'

export default (instance: FastifyInstance) => {
    instance.register(FastifyStatic, { 
        root: path.join(__dirname, '../views/'),
        prefix: '/statics/'
    })
}