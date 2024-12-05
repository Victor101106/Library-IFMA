import { z } from 'zod'

const environmentSchema = z.object({
    PORT: z.number()
})

const environment = environmentSchema.parse({
    PORT: Number(process.env.PORT)
})

export { environment }
