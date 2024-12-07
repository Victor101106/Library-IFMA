import { z } from 'zod'

export const EnvironmentSchema = z.object({
    PORT: z.number()
})