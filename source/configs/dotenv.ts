import { EnvironmentSchema } from '../schemas'

const environment = EnvironmentSchema.parse({
    PORT: Number(process.env.PORT)
})

export { environment }
