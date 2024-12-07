import { z } from 'zod'

export const EnvironmentSchema = z.object({
    GOOGLE_CLIENT_SECRET_KEY: z.string(),
    GOOGLE_REDIRECT_URI: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    PORT: z.number()
})