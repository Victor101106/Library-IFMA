import { OAuth2Client, TokenPayload } from 'google-auth-library'
import { environment } from '../configs'
import { failure, Result, success } from '../helpers'
import { InvalidCredentialError } from './errors'

export class GoogleAuthService {

    private constructor() {}

    public static create(): GoogleAuthService {
        return new GoogleAuthService()
    }

    async verifyCredential(credential: string): Promise<Result<InvalidCredentialError, TokenPayload>> {

        const client = new OAuth2Client()

        const ticket = await client.verifyIdToken({
            audience: environment.GOOGLE_CLIENT_ID,
            idToken: credential
        })

        const payload = ticket.getPayload()

        if (!payload) 
            return failure(new InvalidCredentialError())

        return success(payload)

    }

}

export const googleAuthService = GoogleAuthService.create()